import React from 'react'
import menu from "../../assets/menu.svg";

const Navbar = () => {
    const nav= ["Home", "Map", "Upcoming", "Notification",];
  return (
   <>
   <div className=' gap-4 hidden md:flex mr-4'>

   {
    nav.map(function(item){
        return(
           <p key={item} className='text-xl hover:underline text-white'> {item}</p>
        )
    })
   }

    </div>
       <img className='rounded md:hidden cursor-pointer mr-4' src={menu}></img>
    </>
  )
}

export default Navbar