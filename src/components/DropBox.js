import React from 'react'
import DragElement from './DragElement';


function drop(e) {
    e.preventDefault();
   const element = e.dataTransfer.getData("element");
   const dropBox = e.target.closest("ul").id
  
  if(dropBox==='placesToVisit'){
    document.getElementById('placesToVisit').appendChild(document.getElementById(element));
  }else if(dropBox==='markedToVisited'){
    document.getElementById('markedToVisited').appendChild(document.getElementById(element));
  }else if(dropBox==='notInterested'){
    document.getElementById('notInterested').appendChild(document.getElementById(element));
  }

  }

  function allowDrop(e) {
    e.preventDefault();
  }
  


function DropBox({title,id,data}) {
  return (
    <div className="mb-8 bg-gray-100 md:w-[30%] w-full border border-black px-5 py-5 rounded-lg">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul id={id} onDrop={drop} onDragOver={allowDrop} className="h-full">
       {
         data.map((item,i)=> <DragElement placeName={item.placeName} description={item.description} id={i} key={i}/>)
       }
    </ul>
  </div>
  )
}

export default DropBox