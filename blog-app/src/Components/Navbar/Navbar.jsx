import React from 'react'
import './../../Style/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const router = useNavigate();
  return (
    <div>
      <div className='navbar'>
        <div className='nav-chil-1' onClick={()=>router('/')}>Home</div>

        <div className='nav-chil-2' >
          <p className='blog' onClick={()=>router('all-blog')}> Blog</p>
          <p className='about' >About <p className='list' >
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>

          </p></p>
          
        </div>

        <div className='nav-chil-3'>
          <p><input type='text' placeholder='search Your Blog...' id='search'/></p>
          <p className='login' onClick={()=>router('login-page')}>Login</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
