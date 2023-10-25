import React from 'react'
import backgroundImage from '../assets/Banner Image.png'
import Footer from './Footer';
import Header from './Header';

const Body = () => {
  return (
    <div className='relative font-'>
      <Header />
      <img src={backgroundImage} className='h-full w-full object-cover'></img>
      <div className='absolute top-1/4 left-1/4 ' style={{ top: 'calc(25% - 8em)', left: 'calc(25% + 1em)' }}>
        <div className=' text-4xl font-bold w-96 text-secondary01'  >
        Automate <p className='text-primary03 inline-block'>marketing</p> with just one click
        </div>
       
        <div className='text-xs text-secondary02 py-8'>
          We handle end to end marketing automation using AI automations
        </div>
        <div>
          <button className='bg-primary02 text-secondary03 rounded-md py-3 px-4 text-sm font-bold'>Book a Demo  &rarr;</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Body