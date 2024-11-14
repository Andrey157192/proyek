import React, { useState } from 'react';


const LoginForm = () => {const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });   
  const handlChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials,
         [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Login submitted:', credentials);
  };

  return (<div>
    <form onSubmit={handleSubmit}>
    <h2>Login</h2>
      <input
      type="email"
      name="email"
      placeholder="Email"
      value={credentials.email}
      onChange={handlChange}
      required
      />
      <input
      type="password"
      name="password"
      placeholder="Password"
      value={credentials.password}
      onChange={handlChange}
      required
      />
      <button type="submit">Login</button>
      </form>

  
      



);
    
};
  