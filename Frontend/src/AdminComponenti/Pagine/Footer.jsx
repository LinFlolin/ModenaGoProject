import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <div className=' flex justify-center p-7
     bg-secondo h-14 text-base text-orange-200'>
        
        <div className=' flex justify-evenly w-full'>
          <Link>Credit</Link>
          <Link>contatti</Link>
          <Link>Luogo</Link>
        </div>

      </div>
   
  )
}
