import React from 'react';
import '../css/blog.css'
import '../css/oneblog.css'
import { Box, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';



const Blog = ({ title, description, image, userName, isUser,id ,link }) => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myBlogs/${id}`)
  }
  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:2000/api/blog/delete/${id}`).catch(err => console.log(err));
    const data = await res.data;
    return data;

  }
  const handleDelete = (e) => {
    deleteRequest().then(()=>navigate('/')).then(()=>navigate('/blogs'));
  }
  console.log(title, isUser);
  
    return (
      <>        
      
     
          <div className='blogBox'>   
            <div className="blog" >
               
  <div className="blog-box">
    <div className="blog-image">
      <img src={image} alt="Blog" />
    </div>
              <div className="blog-details">
                {isUser && (
                  <Box display='flex'>
                    <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}>
<EditIcon  style={{ color: "yellow" }} />
                    </IconButton>
                                       <IconButton >
<DeleteIcon onClick={handleDelete} style={{ color: "red" }} />
                    </IconButton>
                  </Box>
          
        )}
                <h2 id="title">{title}</h2>
                            <br/>
                        <p>{description}.</p>
                <a href="https://www.purdueglobal.edu/blog/student-life/valuable-health-wellness-blogs/">More Blogs..</a>
    </div>
                   
            </div>
           

                </div>
                </div>
            </>
  )
}

export default Blog