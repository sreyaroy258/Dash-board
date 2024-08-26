
import React  from 'react'

import { useReactTable , getCoreRowModel, flexRender , getPaginationRowModel } from'@tanstack/react-table'

import  Modal from '../Components/Modal'
import Delete from '../Components/Delete'
import { useNavigate } from 'react-router-dom'


const BasicTable = ( {data}  ) => {

    const columns = [
        {
            header:'ID',
            accessorKey : 'id',
        },
     
        {
            header:'NAME',
            accessorKey : 'name' ,
        },
        {
            header:'ROLE',
            accessorKey : 'role' ,
        },
        {
            header:'Email Address',
            accessorKey : 'email' ,
        },
        {
          header: 'Status',
          accessorKey: 'status',
        },
        {
          header:'Teams',
          accessorKey : 'team',
        },
        {
          id: 'actions',
          header: 'Delete',
          cell: ({ row }) => (
            <button 
              onClick={(e) => e.stopPropagation().onDeleteRow(row.original.id)}
            >
             <Delete />
             <Modal />
              
            </button>
          ),
        },
        {
          id: 'actions',
          header: 'Edit',
          cell: ({ row }) => (
            <button
              onClick={() => handleEdit(row.original)}
              className="text-blue-500 hover:text-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 50 50">


            <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z">

          </path>
          </svg>
            </button>
          ),
        }
        
    ];


const table = useReactTable({
     data ,
     columns ,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
});
 
const navigate = useNavigate();
  const handleClick = () => {
    navigate('/memberdetails');}

  return (    
 
 
    <div className='flex items-center justify-center mt-4 'class="w3-container" >
       <table className='border-solid border-2 border-slate-200 ' class="w3-table-all">
        <thead>
        {table.getHeaderGroups().map(headerGroup =>(
            <tr key={headerGroup.id}>
             {headerGroup.headers.map(header => (
             <th key={header.id} className='font-light '>
             {flexRender(header.column.columnDef.header,
                header.getContext()
             )} 
              
             </th>
             ))}
          </tr>
        ))}
        </thead>

        
        <tbody >
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}   >
            {row.getVisibleCells().map(cell =>
             (
              <td key={cell.id} className=' text-center cursor-pointer'  onClick={handleClick} >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>

       </table>
       <div className='flex items-center justify-between'>
        <div className='flex gap-4'>
        <button className='border-2 border-gray-500 rounded-e-md rounded-s-md p-1 mt-2' onClick={()=> table.setPageIndex(0)}>First Page</button>

        <button className='border-2 border-gray-500 rounded-e-md rounded-s-md p-1 mt-2'  disabled={! table.getCanPreviousPage()} onClick={()=> table.previousPage()} >Prev page</button>

        </div>
        

        <div className='flex gap-4'>
        <button  className='border-2 border-gray-500 rounded-e-md rounded-s-md p-1 mt-2' disabled={! table.getCanNextPage()} onClick={() => table.nextPage()} >  Next page </button>

        <button className='border-2 border-gray-500 rounded-e-md rounded-s-md p-1 mt-2'   onClick={()=> table.setPageIndex(table.getPageCount()-1)}  > Last Page</button>
        </div>
        
       </div>
    </div>

  

  )
}



export default BasicTable