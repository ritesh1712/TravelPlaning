import React from 'react'

function DragElement({placeName,description,id}) {

    const handleDrag = (e)=>{
        e.dataTransfer.setData("element", e.target.id);
      }
      
  return (
    <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer" id={placeName+id} draggable onDragStart={(e)=>handleDrag(e)}>
    <details>
      <summary>{placeName}</summary>
      <p>{description}</p>
    </details>
  </li>
  )
}

export default DragElement