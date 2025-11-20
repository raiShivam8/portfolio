import React from 'react'
import Projectsitem from './Projectsitem'
import crypto from '../assets/image.png'
import netflix from '../assets/netflix2.png'
import property from '../assets/property.png'
import twitch from '../assets/twitch2.jpg'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040] m-auto md:pl-20 p-4 py-16 '>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Projectsitem img={crypto} title='Crypto App' />
        <Projectsitem img={property} title='Property App' />
        <Projectsitem img={netflix} title='Netflix App' />
        <Projectsitem img={twitch} title='Twitch App' />
      </div>
    </div>
  )
}

export default Projects
