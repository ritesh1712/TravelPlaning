import React from 'react'
import Button from '../button/Button'

function InfoCard({scale,cardColor,button,heading,description,image}) {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8">
          <div className={`cursor-pointer flex p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300  ${scale && 'hover:scale-110'} backdrop-sepia-0 bg-${cardColor}/30 border-2`}>
            <img src={image} alt="i" className="w-24 h-24 mx-auto mb-4" />
            <div>
            <h3 className="text-xl font-bold mb-4">{heading}</h3>
            <p className="text-gray-600 mb-5">{description}</p>
            {button &&
            <Button title={'View Experience'} width={'170px'} />}
            </div>
          </div>
        </div>
  )
}

export default InfoCard