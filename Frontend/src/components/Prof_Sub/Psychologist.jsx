import React from 'react'
import Info from '../Proff/Info.json'
import Card from '../Proff/Card'
import './style.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Psychologist = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-full flex flex-row h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold'>
        <a className='hover:text-black mark flex flex-col flex-wrap first-letter mr-2' href='#h'>Home  <div className='line'></div></a> / <div className='hover:text-black mark flex flex-col flex-wrap first-letter mr-2 cursor-pointer px-2'>Professionals <div className='line1'></div></div> / Psychologists
      </div>
      <div className='w-full h-auto p-8 flex flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start lg:pl-14'>
        {Info.map((items) => {
          if (items.prof === 'PSYCHOLOGIST') {
            return <Card key={items.id} img={items.img} prof={items.prof} name={items.name} degree={items.degree} />
          }
          return null
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Psychologist