import { useState } from 'react';

function useAuth(userData,action) {
  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState({
    username:"",
    password:""
  });
  const [data, setData] = useState(null);

  const inputchange = ()=>{
    setError({
      username:"",
      password:""
    })
  }

  const postData = async (formData) => {
   if(formData) 
    {
      console.log("hello")
      action(formData);
      setLoading(true);
      setError(null);
      if (Object.keys(formData).length > 0){
        localStorage.setItem("userDetails",JSON.stringify(formData));
        setData({
          response:true
        })
      }
    } 
  };


return { data, error, loading, postData,inputchange };
};

export default useAuth;
