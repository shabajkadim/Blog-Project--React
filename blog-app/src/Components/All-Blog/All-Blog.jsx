import React, { useState } from 'react'
import BlogList from './../Blog-list/Blog-List'
const AllBlog = ({myStudentData}) => {
    console.log(myStudentData,"player")
 
  return (
    <div>
      <div>blog-data</div>
      {myStudentData.map((studentData)=>(
                <div >
                    <img style={{width:"30%", height:"300px"}} src={studentData.image}/>
                    <h1>{studentData.name}</h1>
                    <h1>{studentData.Discrip}</h1>
                </div>
            ))}
    </div>
  )
}

export default AllBlog
