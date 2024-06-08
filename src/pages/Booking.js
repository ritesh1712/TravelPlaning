import React, { useState,useEffect } from 'react'
// import { Geocoder } from '@mapbox/search-js-react';
// import { searchLocation } from '../api/maps/searchLocation'
import { searchPlace,getLogAndLat } from "../api/maps/searchPlace"
import LocationSuggestions from '../components/booking/LocationSuggestions'
import Input from '../components/inputs/Input'
import car1 from '../images/car/car1.png'
import car2 from '../images/car/car2.png'
import car3 from '../images/car/car3.png'
import car4 from '../images/car/car4.png'
import car5 from '../images/car/car5.png'
import {Map,Marker} from 'react-map-gl';
import locationIcon from '../images/InteractiveMaps.png'
import 'mapbox-gl/dist/mapbox-gl.css';

function Booking() {

const [from,setFrom] = useState('')
const [to,setTo] = useState('')
const [suggestions,setSuggestions] = useState(null)
const [fromFill,setFromFill] = useState(true)
const [toFill,setToFill] = useState(true)
const [selectedCar,setSelectedCar] = useState('')
const [coordinates,setCoordinates] = useState(null)

const search = async(value)=>{
  if(value!==''){
    const res = await searchPlace(value);
    setSuggestions(res.suggestions)
    console.log(res)
  }else{
    setSuggestions(null)
    setFromFill(true)
    setToFill(true)
  }
}

const findLonAndLat =async (id) =>{
  const res = await getLogAndLat(id);
  setCoordinates({log:res.features[0].geometry.coordinates[0],lat:res.features[0].geometry.coordinates[1]})  
  // setFrom(res.features[0].properties.full_address)
}

const handleFrom= (value) =>{
  setFromFill(false)
  setFrom(value)
  search(value)
}
const handleTo= (value) =>{
  setToFill(false)
  setTo(value)
  search(value)
}



const carList = [
  {
    id:0,
    image:car1,
    rant:150,
    name:'Economy'
  },
  {
    id:1,
    image:car2,
    rant:100,
    name:'MiniVan'
  },
  {
    id:2,
    image:car3,
    rant:120,
    name:'Comfort'
  },
  {
    id:3,
    image:car1,
    rant:250,
    name:'Luxury'
  },
  {
    id:4,
    image:car5,
    rant:155,
    name:'Electric'
  }

]

const access_token = 'pk.eyJ1Ijoibm9uZW1lIiwiYSI6ImNsd3QwdXVjNDAxbzAyanNrdnNmM2l6c2UifQ.yYthI8__O4Oq2POcbCvDnw'

  return (
    <div className='md:flex mt-16'>
      <div className=" md:w-[30%] p-4">
<h2 className="text-xl font-semibold pb-4">Booking</h2>
<div className="border-2 p-4 bg-gray-50 rounded-md">
<label className="block text-gray-400 mb-2 font-semibold" htmlFor="whereFrom">Where from ?</label>
      <Input
        placeholder='Enter your place name'
        type="text"
        id="whereFrom"
        value={from}
        handelChange={handleFrom}
        />
        {
         ( suggestions && !fromFill) && 
        <LocationSuggestions suggestions={suggestions} handelClick={(value,mapbox_id)=>{setFrom(value); setSuggestions(null); setFromFill(true);findLonAndLat(mapbox_id)}} />
        }
      <label className="block text-gray-400 my-2 font-semibold" htmlFor="whereTo">Where to ?</label>
      <Input
        placeholder='Enter your place name'
        type="text"
        id="whereTo"
        value={to}
        handelChange={handleTo}
        />
         {
        (  suggestions && !toFill )&& 
        <LocationSuggestions suggestions={suggestions} handelClick={(value)=>{setTo(value); setSuggestions(null); setToFill(true)}} />
        }
         </div>

  <h2 className='my-2 font-medium text-gray-500'>Select car</h2>
<div className='flex flex-wrap items-center m-auto'>
{
 carList.length > 0 ? carList.map((item,i)=>{
    return(
      <div onClick={()=> setSelectedCar(item.id)} key={item.id} className={`p-2 m-2 flex flex-col justify-center items-center w-[45%] border-2 hover:border-blue-400 cursor-pointer rounded-md bg-gray-100 shadow-md ${selectedCar===item.id&&'border-blue-400'}` }>
        <img className='h-12' src={item.image} alt={item.name} />
        <div className='flex justify-between text-xs mt-2 w-full'>
          <p>{item.name}</p>
          <p className='font-medium text-sm'>₹ {item.rant}/hour</p>
        </div>
      </div>
    )
  }):
  <div className='text-center w-full p-4 text-gray-400 font-medium'>No cars available</div>
}
</div>

        </div>
      <div className='border-l-2 border-b-2 rounded-md bg-gray-100 p-4 md:w-[70%] h-[550px]'>
        <h2 className='text-xl font-semibold pb-4'>Map</h2>
        <div className='w-full rounded-md overflow-hidden'>
      <Map
      mapboxAccessToken={access_token}
      initialViewState={{
        longitude: 77.462997,
        latitude: 22.451200,
        zoom: 14
      }}
      style={{width: "100%", height: 450}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={coordinates? coordinates.log:77.462997} latitude={coordinates?coordinates.lat:22.451200} anchor="bottom">
      <img src={locationIcon} className='h-20'/>
      </Marker>
      </Map>
      </div>
      </div>

    </div>

  )
}

export default Booking