import React from 'react'
import './button.css'

function Button({title,width }) {
  return (
    <button className='button' style={{width}}>
    <span>{title}</span>
  </button>
  )
}

export default Button