import React from 'react'

function Input({type='text',placeholder,id,value,handelChange}) {
  return (
    <input
    type={type}
    placeholder={placeholder}
    id={id}
    className="w-full px-4 border-gray-300 py-2 border-2 focus:border-blue-300 outline-none rounded-lg shadow-md"
    value={value}
    onChange={(e) => handelChange(e.target.value)}
    required
  />
  )
}

export default Input