import React from 'react'

function LocationSuggestions({suggestions,handelClick}) {
  return (
    <div className='bg-gray-100 border-2 fixed mt-2 p-4 rounded-md' >
       {
        suggestions.length>0?
        suggestions.map((item,i)=>(
            <p key={i} onClick={()=>handelClick(item.full_address,item.mapbox_id)} className='bg-white my-2 p-2 cursor-pointer hover:scale-105 shadow-sm rounded-md border border-blue-300 text-nowrap text-ellipsis overflow-hidden' >{item.name}</p>
        )):<p className='text-center font-semibold text-gray-500'>Not Found 404</p>
       }
    </div>
  )
}

export default LocationSuggestions