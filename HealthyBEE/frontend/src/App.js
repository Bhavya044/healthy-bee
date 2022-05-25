import Header from "./components/Header";
import React, { useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
// import Bmi from "./components/Bmi";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./components/Homepage";
import Bmi from "./components/Bmi";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId"))
    {
      dispatch(authActions.login());
    }
  },[dispatch])
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
     
        <Routes>
          if(isLoggedIn==true)
        
          {!isLoggedIn ?
            <>
              <Route path="/" element={<Homepage />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/blogs' element={<Blogs />} />
            </> :
            <>
              <Route path='/blogs/add' element={<AddBlog />} />
              <Route path='/myBlogs' element={<UserBlogs />} />
              <Route path='/myBlogs/:id' element={<BlogDetail />} />
              <Route path='/calculatebmi' element={<Bmi />} />
                <Route path="/" element={<Homepage />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/blogs' element={<Blogs />} />
            </>
          }
           
          </Routes>
       
      </main>
   </React.Fragment>
  );
}

export default App;
