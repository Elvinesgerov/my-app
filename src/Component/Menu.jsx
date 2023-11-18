import React from 'react'
import './Menu.css'
import Navber from './Navber'
import Left from './Left'
import mobile from './mobile.svg'
import email1 from './mailmessage.svg'
import home from './home.svg'
import Level from './Level'

const Menu = () => {
  return (
    <div>
      <div className='box1'>
        <Navber/>
        <Left/>
        <div className='box3'>
        <img className='mobile' src={mobile} alt="" />
        <p className='number'>+994-50-385-13-83</p>
        </div>
        <div className='box4'>
          <img className='message' src={email1} alt="" />
          <p className='email'>elvin.esgerov@gmail.com</p>
        </div>

        <div className='box5'>
          <img className='home' src={home} alt="" />
          <p className='adress'>Apşeron rayonu Saray qesebesi</p>
        </div>

        <div className='box6'>
          <p className='dilbiliyi'>Language Skills</p>
        </div>
        <p className='azerbaycandili'>Azerbaycan Dili - Əla</p>
        <Level/>
        <p className='turkce'>Turk Dili - Əla</p>
        <Level/>
        <p className='turkce'>English language - B1 </p>
        <div className='box3'>
        <div className='inglish'>

        </div>
        <div className='ing1'>
          a
        </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
