import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';
import '../css/blog.css'
import '../css/oneblog.css'
import ScrollToTop from "react-scroll-to-top";

const Blogs = () => {
 const [blogs, setBlogs] = useState()
    const sendRequest = async () => {
      const res = await axios.get('http://localhost:2000/api/blog ').catch(error => console.log(error));
      const data = await res.data;
      return data;

    }
  useEffect(() => {
  
    sendRequest().then(data=>setBlogs(data.blogs))
  
  }, [blogs]);
  console.log(blogs);
  return (
    <>
      <ScrollToTop smooth color="#c21723" />

   <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>

      <div>
        

        {
          blogs && blogs.map((blog, index) => (<Blog id={blog._id} isUser={localStorage.getItem('userId')===blog.user._id }key={index} title={blog.title} description={blog.description} image={blog.image} user={blog.name} link={blog.link} />))
       }
      
      </div>
      </>
  )
}

export default Blogs