import React from 'react'

function Button2({title,icon}) {
  return (
    <div class="group relative flex justify-center items-center text-white text-sm font-bold">
        <div class="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-gray-950 to-gray-600 p-3 rounded-full cursor-pointer duration-300">
        <i class="material-icons">{icon}</i>
    <span class="text-[0px] group-hover:text-sm duration-300">{title}</span>
  </div>
</div>

  )
}

export default Button2