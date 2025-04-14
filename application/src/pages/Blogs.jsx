import React from 'react'
import Header from '../Comman/Header'
import { blog } from '../Data/blogs'
import { Link } from 'react-router-dom';
export default function Blogs() {

  let allBlogs=blog.map((v,i)=>{
    return(
      <div className='bologIteams' key={i}>
        <h1>{v.title}</h1>
        <p>
       
          {v.body}
        </p>
        <button><Link to={`/blog/${v.id}`}>Read more</Link></button>
      </div>
    )
  })

  return (
    <div>
          <Header/>
          <h1>Blogs page</h1>
          <div className='Container'>
            {allBlogs}
          </div>
        </div>
  )
}

