import React from 'react'
import '../css/home.css'


const Homepage = () => {
     var sectionStyle = {
          backgroundImage: "url('https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '92vh'

};

     return (
          <div className='main' style={sectionStyle}>
                     <div class="glass-toolbar">
                             <a href="http://localhost:3000/auth" className="glass-button">Explore Blogs</a>
                         </div>
            
      </div>
 
        
  )
}

export default Homepage