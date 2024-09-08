import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Default from '../Layout/Default';
import Auth from '../Layout/Auth';

const Signup = lazy(()=> import("../Modules/frontend/Signup"));
const Signin = lazy(()=> import("../Modules/frontend/Signin"));
const Home = lazy(()=> import("../Modules/frontend/Home"));
const BlogList = lazy(()=> import("../Modules/frontend/User/Bloglist"));
const NotFound = lazy(()=> import ("../Utility/components/frontend/Pagenotfound"));
const Frontend = () => {
  return (
   <Routes>
    <Route
      path='/'
      element = {
        <Default>
            <Suspense fallback={Loading}>
              <Home/>
            </Suspense>
        </Default>
    }
    />
    <Route
      path='/sign-in'
      element = {
        <Default>
          <Suspense fallback={Loading}>
              <Signin/>
          </Suspense> 
        </Default>
    }
    />
    <Route
      path='/sign-up'
      element = {
        <Default>
          <Suspense fallback={Loading}>
              <Signup/>
          </Suspense> 
        </Default>
    }
    />
    <Route
      path='/blog-list'
      element = {
        <Auth>
          <Suspense fallback={Loading}>
              <BlogList/>
          </Suspense> 
        </Auth>
    }
    />
     <Route path="*" element={<NotFound />} />
   </Routes>
  )
}

const Loading = () => {
  return (
    <>
      
    </>
  );
};

export default Frontend
