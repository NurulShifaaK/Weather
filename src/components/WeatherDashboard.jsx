import React from 'react'
import Navbar from './content/Navbar'
import Header from './content/Header'
import Background from './content/Background'
import Weather from './content/Weather'
import Mapdetails from './content/Mapdetails'


const WeatherDashboard = () => {
  return (
    <>
    <div className="relative min-h-screen">
  <Background />
  <div className="relative z-10">

    <div className='flex justify-between items-center '>
    <Header />
    <Navbar/>
    
    </div>
    <Weather/>




    <Mapdetails/>

  
    </div>
    </div>
    </>
  )
}

export default WeatherDashboard










