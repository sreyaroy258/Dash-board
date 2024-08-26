import React from 'react'
import { useState } from "react"
import Modal from '../Components/Modal'
import { MdOutlineDeleteOutline } from "react-icons/md";

const Delete = () => {
    const [open, setOpen] = useState(false)

  return (
    <div>
        <main className="App">
      <button className="btn btn-danger" onClick={() => setOpen(true)}>
      <MdOutlineDeleteOutline /> 
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          < MdOutlineDeleteOutline size={56} className="mx-auto text-purple-900" />
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-danger w-full bg-purple-700 text-white rounded-sm">Delete  </button>
            <button
              className="btn btn-light w-full"
              onClick={() => setOpen(false)}  >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </main>
    </div>
  )
}

export default Delete