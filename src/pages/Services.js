// src/pages/Services.js

import React, { useState } from "react";
import Modal from "../components/Modal";


const Services = () => {
  const [destination, setDestination] = useState("bhopal");
  const [days, setDays] = useState("5");
  const [showItinerary, setShowItinerary] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input and show itinerary
    setShowItinerary(true);
  };

const handleDrag = (e)=>{
  e.dataTransfer.setData("element", e.target.id);
}
function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("element");

  console.log(e.targetx)

  document.getElementById('h').appendChild(document.getElementById(data));
  // console.log(data)
}
function allowDrop(e) {
  e.preventDefault();
}


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
          <div className="flex flex-wrap box-border justify-between">
            <div className="mb-8 bg-gray-100 md:w-[30%] w-full border border-black px-5 py-5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Places to Visit</h3>
              <ul onDrop={()=>console.log('drop')}>
                <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer">
                  <details>
                    <summary>Place 1</summary>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum sapiente ab iure culpa. Labore repudiandae
                      necessitatibus beatae, deserunt totam similique.
                    </p>
                  </details>
                </li>
                <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer">
                  <details>
                    <summary>Place 2</summary>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum sapiente ab iure culpa. Labore repudiandae
                      necessitatibus beatae, deserunt totam similique.
                    </p>
                  </details>
                </li>
                <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer">
                  <details>
                    <summary>Place 3</summary>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum sapiente ab iure culpa. Labore repudiandae
                      necessitatibus beatae, deserunt totam similique.
                    </p>
                  </details>
                </li>
              </ul>
            </div>

            <div className="mb-8 bg-gray-100 md:w-[30%] w-full border border-black px-5 py-5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Marked to Visited</h3>
              <ul onDrop={drop} onDragOver={allowDrop} id='h'>
                <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer">
                  <details>
                    <summary>Place 1</summary>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum sapiente ab iure culpa. Labore repudiandae
                      necessitatibus beatae, deserunt totam similique.
                    </p>
                  </details>
                </li>
                <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer">
                  <details>
                    <summary>Place 2</summary>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum sapiente ab iure culpa. Labore repudiandae
                      necessitatibus beatae, deserunt totam similique.
                    </p>
                  </details>
                </li>
                <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer">
                  <details>
                    <summary>Place 3</summary>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum sapiente ab iure culpa. Labore repudiandae
                      necessitatibus beatae, deserunt totam similique.
                    </p>
                  </details>
                </li>
              </ul>
            </div>

            <div className="mb-8 bg-gray-100 md:w-[30%] w-full border border-black px-5 py-5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Not Interested</h3>
              <ul>
                <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer" id="place" draggable onDragStart={(e)=>handleDrag(e)}>
                  <details>
                    <summary>Place 1</summary>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum sapiente ab iure culpa. Labore repudiandae
                      necessitatibus beatae, deserunt totam similique.
                    </p>
                  </details>
                </li>
                <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer">
                  <details>
                    <summary>Place 2</summary>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum sapiente ab iure culpa. Labore repudiandae
                      necessitatibus beatae, deserunt totam similique.
                    </p>
                  </details>
                </li>
                <li className="mb-2 border border-black bg-white p-2 rounded-lg shadow-md cursor-pointer">
                  <details>
                    <summary>Place 3</summary>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum sapiente ab iure culpa. Labore repudiandae
                      necessitatibus beatae, deserunt totam similique.
                    </p>
                  </details>
                </li>
              </ul>
            </div>
          </div>

          {/* Example of cost estimation and booking options */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Estimated Cost</h3>
            <p className="text-gray-600 mb-2">Approximate Cost: $XXXX</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Booking Options</h3>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
              Book a Hotel
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
              Book a Flight
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
              Book a Taxi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
