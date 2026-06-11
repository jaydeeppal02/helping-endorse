import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const passRef = useRef();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  
 const signUp = async (e) => {
  e.preventDefault();

  if (
    !form.name ||
    !form.username ||
    !form.email ||
    !form.password
  ) {
    alert("All fields are required");
    return;
  }

  // Local Storage me save
  localStorage.setItem("user", JSON.stringify(form));

  alert("Signup Successful");
  navigate("/login");
};

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
 
  return (
    <>
      <div className="w-[90%] md:w-1/3 h-[580px] bg-[#e7dede] text-[#6f1d1b] mx-auto p-10 rounded-2xl shadow-2xl mt-5">
        <h1 className="text-center font-bold text-3xl mb-6">Signup...</h1>
        <form onSubmit={signUp}>
          <label htmlFor="name">Full name</label>
          <input
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Full name"
            name="name"
            id="name"
            className="w-full p-2 mb-4 border-b-2 outline-0"
          />
          <label htmlFor="username">Username</label>
          <input
            value={form.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            className=" w-full p-2 mb-4 border-b-2 outline-0"
          />
          <label htmlFor="email">E-mail</label>
          <input
            value={form.email}
            onChange={handleChange}
            type="text"
            placeholder="E-mail"
            name="email"
            id="email"
            className=" w-full p-2 mb-4 border-b-2 outline-0"
          />
          <label htmlFor="password">Password</label>
          <input
            value={form.password}
            onChange={handleChange}
            ref={passRef}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className=" w-full p-2 mb-4 border-b-2 outline-0"
          />
          <div className="relative">
            <span
              className="absolute right-3 bottom-6 cursor-pointer"
              onClick={() => {
                if (passRef.current.type === "password") {
                  passRef.current.type = "text";
                  ref.current.src = "./eyecross.png";
                } else {
                  passRef.current.type = "password";
                  ref.current.src = "./eye.png";
                }
              }}
            >
             <img ref={ref} src="./eye.png" alt="eye" width={20} />
            </span>
          </div>
          <input type="checkbox" id="remember" className="ml-2 mb-4" /> Remember me
          <br />
          <p
            className=" text-sm text-[#6f1d1b] mt-0 mb-6 hover:underline hover:cursor-pointer inline-block hover:underline-offset-2"
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have an account?{" "}
          </p>
          <button
            type="submit"
            className="w-full bg-[#6f1d1b] rounded-xl p-2 text-[#edede9] mx-auto mt-1 hover:shadow-2xl hover:cursor-pointer"
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
