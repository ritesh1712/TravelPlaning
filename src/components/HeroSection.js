import React from 'react'
import Button from './button/Button'
import heroSection from '../images/heroSection.png'

function HeroSection() {
  return (
    <section className="hero bg-white h-screen text-gray-800 lg:px-10">
        <div className="container mx-auto h-full flex flex-col md:flex-row items-center px-4 gap-">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-5xl font-bold mb-4">Plan Your Perfect Trip</h1>
            <p className="text-xl md:text-2xl mb-8">Discover new destinations, create itineraries, and book your travel all in one place.</p>
            <Button title={'Get Started'} />
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <img src={heroSection} alt="Travel" className="w-[80%] m-auto h-auto" />
          </div>
        </div>
      </section>
  )
}

export default HeroSection