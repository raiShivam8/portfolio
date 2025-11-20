import React, { useState } from 'react'
import axios from 'axios'

function Contact() {

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')

  async function Submithandler(e){
    e.preventDefault()
    try{
      let res = await axios.post("http://localhost:1268/contact",{
        Name:name,
        Phone:phone,
        Email:email,
        Subject:subject,
        Message:message
      })
      alert(res.data)
    }
    catch(er){
      console.log("error",er)
    }
    setName('')
    setPhone('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <div id='contact' className='max-w-[1040] m-auto md:pl-20 p-4 py-10'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      <form onSubmit={Submithandler}>
       <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
         <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" value={name} name='name' onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" value={phone} name='phone' onChange={(e)=>setPhone(e.target.value)} required/>
        </div>
       </div>
       <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Email</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" value={email} name='email' onChange={(e)=>setEmail(e.target.value)} required/>
       </div>
       <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Subject</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" value={subject} name='subject' onChange={(e)=>setSubject(e.target.value)} required/>
       </div>
       <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' value={message} name='message' onChange={(e)=>setMessage(e.target.value)} required></textarea>
       </div>
       <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
        Send Message
       </button>
      </form>
    </div>
  )
}

export default Contact
