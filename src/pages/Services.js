// src/pages/Services.js

import React, { useState } from "react";
import Modal from "../components/Modal";
import DropBox from "../components/dragAndDrop/DropBox";
import Input from "../components/inputs/Input";

const Services = () => {
  const [destination, setDestination] = useState("bhopal");
  const [days, setDays] = useState("5");
  const [showItinerary, setShowItinerary] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input and show itinerary
    setShowItinerary(true);
  };

const data = [
  {placeName:'ritesh',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},
  {placeName:'ritesh',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},
  {placeName:'ritesh',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},
  {placeName:'ritesh',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},

]
const data2 = [
  {placeName:'ritesh1',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},
  {placeName:'ritesh2',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},
  {placeName:'ritesh3',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},
  {placeName:'ritesh4',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},

]
const data3 = [
  {placeName:'ritesh5',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},
  {placeName:'ritesh6',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},
  {placeName:'ritesh7',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},
  {placeName:'ritesh8',description:'Hello I am ritesh raghuwanshi i am from bhopal i am parsuing a mca i have a good knowage of html'},

]

  return (
    <div className="container mx-auto py-12 px-4 mt-12">
      <h1 className="text-3xl font-bold mb-4">Plan Your Trip</h1>

      {!showItinerary ? (
        <Modal>
           <form onSubmit={handleSubmit} className="mb-8">
           <h2 className='text-center text-2xl font-semibold'>Where do you want to go ?</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-400 mb-2 font-semibold"
                  htmlFor="destination"
                >
                  Destination
                </label>
                <Input
                  type="text"
                  id="destination"
                  className="w-full px-4 py-2 border outline-none border-black rounded-lg"
                  value={destination}
                  handelChange={setDestination}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2 font-semibold" htmlFor="days">
                  Number of Days
                </label>
                <Input
                  type="number"
                  id="days"
                  value={days}
                  handelChange={days < 0 ?setDays(0):setDays}
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white font-bold py-2 px-4 rounded"
              >
                Show Itinerary
              </button>
            </form>
        </Modal>
      ) : (
        <div className="itinerary border-2 p-4 rounded-md bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">
            Your Itinerary for {destination}
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            voluptatum, voluptatibus, incidunt non tenetur molestias illum
            reprehenderit dolorem explicabo excepturi consequuntur at quis
            veritatis sint autem laborum aspernatur porro sapiente harum
            doloribus eveniet. Similique, reiciendis quod esse autem saepe,
            veniam provident molestias error deleniti tempora voluptate magnam,
            fugiat rem exercitationem!
          </p>

          <p className="mb-4 font-medium">Duration: {days} days</p>

          {/* Example of nearby places, modify as needed */}
          <div className="flex flex-wrap  box-border justify-between">
          <DropBox title={"Places to Visit"} id={"placesToVisit"}  data={data}/>
          <DropBox title={"Marked to Visited"} id={"markedToVisited"}  data={data2}/>
          <DropBox title={"Not Interested"} id={"notInterested"}  data={data3}/>
          </div>
          {/* Example of cost estimation and booking options */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Estimated Cost</h3>
            <p className="text-gray-600">Approximate Cost: <span className="font-medium text-xl text-black cursor-pointer hover:text-blue-700 transition-all">₹ 2000</span> </p>
          </div>
          <div className="p-2 border-2 rounded-md shadow-md">
            <h3 className="text-lg font-medium text-gray-600 mb-4">Booking Options</h3>
            <div className="flex gap-5 flex-wrap">
            <button className="bg-black text-white font-medium py-2 px-4 rounded text-nowrap">
              Book a Hotel
            </button>
            <button className="bg-black text-white font-medium py-2 px-4 rounded text-nowrap">
              Book a Flight
            </button>
            <button className="bg-black text-white font-medium py-2 px-4 rounded text-nowrap">
              Book a Taxi
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
