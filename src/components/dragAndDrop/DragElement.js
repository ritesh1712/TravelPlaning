import React from 'react'

function DragElement({placeName,description,id}) {

    const handleDrag = (e)=>{
        e.dataTransfer.setData("element", e.target.id);
      }
      
  return (
    <li className="mb-2 border-2 bg-gray-100 hover:border-blue-300 hover:bg-gray-200 p-2 rounded-md shadow-md cursor-pointer transition-all" id={placeName+id} draggable onDragStart={(e)=>handleDrag(e)}>
    <details>
      <summary>{placeName}</summary>
      <p>{description}</p>
    </details>
  </li>
  )
}

export default DragElement