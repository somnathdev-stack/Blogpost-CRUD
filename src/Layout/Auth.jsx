import React from 'react';
import Header from '../Utility/components/frontend/Header';
import Footer from '../Utility/components/common/Footer';
const Auth = ({children}) => {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
      
    </div>
  )
}

export default Auth
