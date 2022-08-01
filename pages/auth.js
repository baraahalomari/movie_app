import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin, signup } from "../features/user/userSlice";

const auth = () => {
  const [isSignUp, setisSignUp] = useState(false);
  const [user, setUser] = useState({name: "", email: "", password: ""});

  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const switchSignUp = (e) => {
    e.preventDefault();
    setisSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(user,router));
    } else {
      dispatch(signin(user,router));
    }
  };

  return (
    <form className="flex flex-col m-5 items-center justify-center space-y-5 p-2" onSubmit={handleSubmit}>
      <h1 className="font-bold text-xl">{isSignUp ? "Sign Up" : "Sign In"}</h1>
      {isSignUp && (
        <input
          name="name"
          type="text"
          required
          placeholder="Username"
          onChange={handleChange}
          className="px-3 py-2 text-black bg-white border border-slate-300 rounded-md w-1/2 sm:w-1/3 text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 invalid:border-pink-500"
          />
      )}
      <input
        type="email"
        name="email"
        onChange={handleChange}
        required
        placeholder="Email"
        className="px-3 py-2 text-black bg-white border border-slate-300 rounded-md w-1/2 sm:w-1/3 text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 invalid:border-pink-500"
      />
      <input
        type="password"
        required
        name="password"
        onChange={handleChange}
        placeholder="Password"
        className="px-3 py-2 text-black bg-white border border-slate-300 rounded-md w-1/2 sm:w-1/3 text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 invalid:border-pink-500"
      />
      <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
      <button
        onClick={switchSignUp}
        className="bg-slate-200 rounded-md p-2 text-sm text-black"
      >
        {!isSignUp
          ? "Don't have account ? Sign Up"
          : "Already have account ? Sign In"}
      </button>
    </form>
  );
};

export default auth;
