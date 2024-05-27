import React from 'react';
import interactiveMapsLogo from '../images/InteractiveMaps.png';
import customItineraries from '../images/CustomItineraries.png'
import booking from '../images/booking.png'
import HeroSection from '../components/HeroSection';
import CardSection from '../components/CardSection';
import Footer from '../components/Footer';

const Home = () => {

const features = [
  {
    image:interactiveMapsLogo,
    heading:'Interactive Map',
    description:'Explore destinations with our interactive maps.'
  },
  {
    image:customItineraries,
    heading:'Custom Itineraries',
    description:'Create and customize your travel itineraries easily.'
  },
  {
    image:booking,
    heading:'Booking Integrations',
    description:'Book flights, hotels, and activities directly.'
  },
]

  return (
    <div className="home-page mt-20 md:mt-10">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <CardSection title={'Features'} scale={true} textColor={'text-gray-800'} bgColor={'bg-gray-100'} cardColor={'white'} data={features}/>

      {/* Testimonials Section */}
      <CardSection title={'What Our Users Say'} button={true} textColor={'text-gray-800'} bgColor={'bg-white'} cardColor={'gray-300'} data={features}/>
      

      {/* Call-to-Action Section */}
     <Footer/>

    </div>
  );
};

export default Home;
