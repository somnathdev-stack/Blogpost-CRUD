import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Header from '../Utility/components/common/Header';
import Footer from '../Utility/components/common/Footer';

const Default = ({children}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('token')) {
      navigate('/blog-list');
    }
  },[])
  return (
    <div>
        <Header/>
            <div>
                {children}
            </div>
        <Footer/>
      
    </div>
  )
}

export default Default
