import React, { useContext } from 'react'
import './Navbar.css'
import { myContext } from './ContextApi'


const Navbar = () => {
    const {input} = useContext(myContext)
    const {setisLoggedIn} = useContext(myContext)
  return (
    <div className='navbar'>
        <div className='navbarHeading'>
            <h2>React Context</h2>
        </div>
        <div className='navbarMenu'>
           
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Support</li>
                <li>About Us</li>
                <li onClick={()=>{
                    setisLoggedIn(false)
                }}>LogOut</li>
                <li style={{color:"yellowgreen"}}>{input}</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar