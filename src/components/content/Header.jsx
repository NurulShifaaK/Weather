import React from 'react'
import wind from "../../assets/wind.png";

const Header = () => {
  return (
    <div className='flex items-center p-4'>
        <h1 className='text-white font-bold text-4xl'>Breezio</h1>
 
           <img className='h-10 w-10 ' src={wind}></img>
       
    </div>
  )
}

export default Header