import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home-page/Home';
import Footer from './Components/Footer-page/Footer';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login-page/Login';
import CreateBlog from './Components/Create-blog/Create-Blog';
import AllBlog  from './Components/All-Blog/All-Blog';
import { player   } from './Components/All-Blog/All-Blog';
import { useState } from 'react';
import BlogList from './Components/Blog-list/Blog-List';



function App() {
 

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={< Home Blogs={(BlogList)}/>} />
        <Route path='login-page' element={<Login/>} />
        <Route path='Create-blogpage' element={<CreateBlog/>}/>
        <Route path='all-blog' element={<AllBlog myStudentData={(BlogList)}/>} />
        <Route path='blog-list' element={<BlogList/>} /> 
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
