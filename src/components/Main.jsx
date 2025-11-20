import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

function Main() {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1609179548370-a5ee66e7a69e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-6xl text-5xl font-bold text-gray-800'>I'm Shivam Rai</h1>
                    <h2 className='sm:text-4xl text-3xl pt-4 text-gray-800'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: 'lem', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href="https://x.com/"><FaTwitter className='cursor-pointer' size={20}/></a>
                        <a href="https://www.facebook.com/"><FaFacebook className='cursor-pointer' size={20}/></a>
                        <a href="https://www.instagram.com/"><FaInstagram className='cursor-pointer' size={20}/></a>
                        <a href="https://www.linkedin.com/"><FaLinkedinIn className='cursor-pointer' size={20}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
