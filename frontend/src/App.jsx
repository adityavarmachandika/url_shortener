import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [link,setlink]= useState('')
  const post_req= async()=>{
    try{
      const response = await fetch('http://localhost:3000/createurl',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({longurl:link})
      })
      if(!response.ok)
        console.log("response not ok")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='mt-20 font-mono'>
      <h6 className='text-center text-3xl'>URL shortener</h6>
      <form className=' text-center flex flex-col my-2'>
        <label htmlFor="url">enter url</label>
        <input onChange={(e)=>setlink(e.target.value)} className='border-black border-2 mx-4 my-2 ' type="text"/>
        <div className='flex flex-row justify-center'>
        <button className='align-middle bg-black text-white w-24' onClick={(e)=>{e.preventDefault(); post_req()}}>Generate</button>
        </div>
      </form>
    </div>
  ) 
}

export default App
