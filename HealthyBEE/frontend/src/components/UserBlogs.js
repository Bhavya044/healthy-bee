import React, { useEffect, useState } from 'react'
import Blog from './Blog';
import axios from 'axios';
import '../css/oneblog.css'
import '../css/blog.css'
import ScrollToTop from "react-scroll-to-top";
const UserBlogs = () => {
  const [user, setUser] = useState()
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios.get(`http://localhost:2000/api/blog/user/${id}`).catch((err) => console.log(err))
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then((data)=>setUser(data.user))
  }, []);

  return (
    <>
       <ScrollToTop smooth color="#c21723" />
   <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
    <div> {
     user &&  user.blogs && user.blogs.map((blog, index) => (<Blog isUser={true} title={blog.title} description={blog.description} image={blog.image} id={blog._id} link={blog.link} key={index} />))
      }</div>
      </>
  )
}

export default UserBlogs