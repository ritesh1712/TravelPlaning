import React from 'react'

function Loading() {
  return (
    <div
    role="status"
    className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
    </div>
  )
}

export default Loading