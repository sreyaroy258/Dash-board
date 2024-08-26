import React, { useState, useEffect } from 'react';
import Select from 'react-select';
  

const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;

  return (
    <div ref={innerRef} {...innerProps}>
      {data.isSubmenu ? (
        <div style={{ marginLeft: '20px' }}>{data.label}</div>
      ) : (
        <div>{data.label}</div>
      )}
    </div>
  );
};

function DynamicDropdown() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch or generate options dynamically
    const fetchedOptions = [
      {
        label : 'Roles',
        Options: [
          { value: 'product manager', label: 'product manager',isSubmenu: true },
          { value: 'product designer', label: 'product designe', isSubmenu: true },
          { value: 'frontend developer', label: 'frontend developer', isSubmenu: true },
          { value: 'backend developer', label: 'backend developer', isSubmenu: true },
        ],
      
      },
      {
        label: 'Teams',
        options: [
          { value: 'developer', label: 'developer', isSubmenu: true },
          { value: 'manager', label: 'manager', isSubmenu: true },
          { value: 'designer', label: 'designer', isSubmenu: true }
        ]
      }
    ];

    setOptions(fetchedOptions);
  }, []);

  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div>
    <div className='text-lg'  >
     <Select
       options={options}
        components={{ Option: CustomOption }}
        onChange={handleChange}
        placeholder="Select an option..."
        className='w-[120px]'
      />
     </div>

      
    </div>
  );
}

export default DynamicDropdown;
