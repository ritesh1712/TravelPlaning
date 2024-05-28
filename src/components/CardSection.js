import React from 'react'
import InfoCard from './cards/InfoCard'

function CardSection({button=false,title,scale=false,cardColor,bgColor,textColor,data}) {
  return (
    <section className={`features py-12 ${bgColor} ${textColor} lg:px-10`}>
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="flex flex-wrap -mx-4">

       {
        data.map((item,i)=>{
            return <InfoCard key={i} button={button} scale={scale} cardColor={cardColor} heading={item.heading} description={item.description} image={item.image} />
        })
       }
      </div>
    </div>
  </section>
  )
}

export default CardSection