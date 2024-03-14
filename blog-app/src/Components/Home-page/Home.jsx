import React, { useState } from 'react'
import axios from 'axios'
import BlogList from '../Blog-list/Blog-List'
import './../../Style/Home-page.css'
import { useNavigate } from 'react-router-dom'


const Home = ({Blogs}) => {
  const router=useNavigate();

  const [Bloglist,setBlog]=useState([]);
 

  async function getData(){
    try{
     const response = await axios.get('http://localhost:3000/all-blog')
     setBlog(response.data)
    }catch(error){
      console.log(error)
    }
  }


  
  return(
    <div className='body'>
      <div className='home-page'></div>
      <div className='blog-page'>
        {Blogs.map((blog)=>(
          <div className='container'>
            <div></div>
            <div ><img className='img' src={blog.image}/></div>
            <h1 className='title'>{blog.name}</h1>
            <p className='description'>{blog.Discrip}</p>
            <p className='view'onClick={()=>router('all-blog')}>{blog.view}</p>
          </div> 
        ))}
        
        
      </div> 
      {/* <div className='page-head'><h1>Blog</h1></div> */}
      
      
       
    </div>
  )
}
export default Home;
