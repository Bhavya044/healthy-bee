import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../css/addblog.css'
import '../css/blog.css'


const BlogDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
   const id = useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState({

   })
  const handleChange = (e) => {
     setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
     }) )
    
  }
  const fetchDetails = async () => {
    const res = await axios.get(`http://localhost:2000/api/blog/${id}`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    fetchDetails().then(data => {
      setBlog(data.blog)
      setInputs({title:data.blog.title,description:data.blog.description,link:data.blog.link})
    });

  }, [id]);
  const sendRequest = async () => {
    const res = await axios.put(`http://localhost:2000/api/blog/update/${id}`, {
      title: inputs.title,
      description: inputs.description,
      link:inputs.link
    }).catch(err => console.log(err));
    const data = res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(data => console.log(data)).then(()=> navigate('/myBlogs/'));
  }

  return (
      

    <div className='maindiv'>
        <div className="bg"></div>
<div className="bg bg2"></div>
      <div className="bg bg3"></div>
      {inputs &&
        <form id='add' action="#" onSubmit={handleSubmit}>
          <h1>Edit Blog</h1>
  
    
          <div className="row">
            <input name='title' type="text" value={inputs.title} onChange={handleChange} id="fancy-text" />
            <label >Title</label>
          </div>
          <div className="row">
            <textarea name="description" onChange={handleChange} value={inputs.description} id="fancy-textarea"></textarea>
            <label >Description</label>
          </div>

          <button type="submit" tabIndex="0">Update</button>
        </form>
      }
      </div>
    
  )
}

export default BlogDetail