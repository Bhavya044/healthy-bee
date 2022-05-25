import axios from 'axios'
import React,{useState} from 'react'
import '../css/addblog.css'
import '../css/blog.css'
import {useNavigate} from "react-router-dom"


const AddBlog = () => {
  const navigate = useNavigate();
   const [inputs, setInputs] = useState({
    title: "", description: "",image : "", link: ""
   })
  const handleChange = (e) => {
     setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
     }) )
    
  }
  const sendRequest = async () => {
    const res = await axios.post('http://localhost:2000/api/blog/add', {
      title: inputs.title,
      description: inputs.description,
      image: inputs.image,
      link: inputs.link,
      user: localStorage.getItem('userId')
      
    }).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>navigate('/myBlogs/'))
  }
  return (
    

    <div className='maindiv'>
        <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
<form id='add' action="#" onSubmit={handleSubmit}>
<h1>Post new Blog</h1>
  
 
    
  <div className="row">
          <input name='title' type="text" value={inputs.title} onChange={ handleChange}id="fancy-text"/>
    <label >Title</label>
        </div>
            <div className="row">
    <textarea name="description" onChange={ handleChange} value={inputs.description} id="fancy-textarea"></textarea>
    <label >Description</label>
  </div>
  <div className="row">
    <input type="text" onChange={ handleChange} value={inputs.image} name="image" id="fancy-text"/>
    <label >Image Url</label>
  </div>
 

  
  <button type="submit" tabIndex="0">Submit</button>
</form>

</div>
  )
}

export default AddBlog