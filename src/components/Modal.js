import React from 'react'

function Modal({children}) {
  return (
    <div className='bg-black/50 z-30 h-screen w-screen absolute top-0 left-0 flex justify-center items-center'>
        <div className='bg-white md:w-1/2 w-9/12 p-10 rounded-lg'>
            {children}
        </div>
        </div>
  )
}

export default Modal