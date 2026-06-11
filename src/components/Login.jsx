import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef,useState } from 'react';


const Login = () => {
  const ref =useRef();
  const passRef = useRef();
  const navigate = useNavigate();
 const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No account found. Please signup first.");
      return;
    }

    if (
      form.email === user.email &&
      form.password === user.password
    ) {
      navigate("/get_started")
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <>
    <div className='w-1/3 h-[550px] bg-[#e7dede] text-[#6f1d1b] mx-auto p-10 rounded-2xl shadow-2xl mt-10'>
    <h1 className='text-center font-bold text-3xl mb-6'>Login...</h1>
    <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input value={form.username} onChange={handleChange} type="text" placeholder='Username' name='username' id='username' className=' w-full p-2 mb-4 border-b-2 outline-0'/>
        <label htmlFor="email">E-mail</label>
        <input value={form.email} onChange={handleChange} type="text" placeholder='E-mail' name='email' id='email' className=' w-full p-2 mb-4 border-b-2 outline-0'/>
        <label htmlFor="password">Password</label>
        <input value={form.password} onChange={handleChange} ref={passRef} type="password" placeholder='Password' name='password' id='password' className=' w-full p-2 mb-4 border-b-2 outline-0 '/>
        <div className='relative'>
        <span className='absolute right-3 bottom-6 cursor-pointer' onClick={()=>{
      
         if(ref.current.src.includes("eye.png")){
          ref.current.src="./eyecross.png";
          passRef.current.type = 'text';
        
        }
         else{
          ref.current.src='./eye.png';
          passRef.current.type = 'password';}
        }}>
          <img ref={ref} src="./eye.png" alt="eye" width={20}/>
        </span>
        </div>
       <p className=' text-sm text-[#6f1d1b] mt-5 mb-6 hover:underline hover:cursor-pointer inline-block hover:underline-offset-2'>Forgot password? </p>
       <p className=' text-sm text-[#6f1d1b] mt-0 mb-6 hover:underline hover:cursor-pointer inline-block hover:underline-offset-2' onClick={()=>{navigate('/signup')}}>Signup </p>
        <button type="submit" className='w-full bg-[#6f1d1b] rounded-xl p-2 text-white mx-auto mt-5 hover:shadow-2xl hover:cursor-pointer'  >Login</button>
    </form>

    </div>
    </>
  )
}

export default Login
