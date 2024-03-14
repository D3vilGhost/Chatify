import Header from "./Header.jsx";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";

export default function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  const {login} =useLogin();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(inputs);
  }

  return (
    <>
      <Header />
      <div className=" min-h-screen flex items-center justify-center ">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-2xl font-bold leading-tight text-white">
            Log in to your account
          </h2>
          <p className="mt-2text-sm text-neutral-300 ">
            Don't have an account?{" "}
            <Link to="/signup"
              className="font-semibold text-green-500 transition-all duration-200 hover:underline"
            >
              Create a free account
            </Link>
          </p>
          <form className="mt-8">
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-white">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border-2 text-white border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1"
                    type="email"
                    placeholder="Username"
                    value={inputs.username}
                    onChange={(e)=>{
                      setInputs({...inputs,username:e.target.value})
                    }}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    className="text-base font-medium text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border-2 text-white border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    value={inputs.password}
                    onChange={(e)=>{
                      setInputs({...inputs,password:e.target.value});
                    }}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md hover:scale-110 border border-black px-3.5 py-2.5 font-semibold text-white bg-black"
                  onClick={handleSubmit}
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
