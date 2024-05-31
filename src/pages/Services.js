// src/pages/Services.js

import React, { useState } from "react";
import Modal from "../components/Modal";
import DropBox from "../components/DropBox";

const Services = () => {
  const [destination, setDestination] = useState("bhopal");
  const [days, setDays] = useState("5");
  const [showItinerary, setShowItinerary] = useState(true);

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
      <h1 className="text-3xl font-bold mb-8">Plan Your Trip</h1>

      {!showItinerary ? (
        <Modal>
           <form onSubmit={handleSubmit} className="mb-8">
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="destination"
                >
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  className="w-full px-4 py-2 border outline-none border-black rounded-lg"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="days">
                  Number of Days
                </label>
                <input
                  type="number"
                  id="days"
                  className="w-full px-4 py-2 border rounded-lg outline-none border-black"
                  value={days}
                  onChange={(e) =>
                    e.target.value > 0 && setDays(e.target.value)
                  }
                  required
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
        <div className="itinerary">
          <h2 className="text-2xl font-bold mb-4">
            Your Itinerary for {destination}
          </h2>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            voluptatum, voluptatibus, incidunt non tenetur molestias illum
            reprehenderit dolorem explicabo excepturi consequuntur at quis
            veritatis sint autem laborum aspernatur porro sapiente harum
            doloribus eveniet. Similique, reiciendis quod esse autem saepe,
            veniam provident molestias error deleniti tempora voluptate magnam,
            fugiat rem exercitationem!
          </p>

          <p className="text-gray-600 mb-2">Duration: {days} days</p>

          {/* Example of nearby places, modify as needed */}
          <div className="flex flex-wrap  box-border justify-between">
          <DropBox title={"Places to Visit"} id={"placesToVisit"}  data={data}/>
          <DropBox title={"Marked to Visited"} id={"markedToVisited"}  data={data2}/>
          <DropBox title={"Not Interested"} id={"notInterested"}  data={data3}/>
          </div>
          {/* Example of cost estimation and booking options */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Estimated Cost</h3>
            <p className="text-gray-600 mb-2">Approximate Cost: $XXXX</p>
          </div>

        </div>
      )}
    </div>
  );
};

export default Services;
