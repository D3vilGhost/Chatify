import { useState } from "react";
import Header from "./Header.jsx";
import { Toaster }from "react-hot-toast";
import useSignup from "../hooks/useSignUp.js";

export default function SignUpPage() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  
	const { signup } = useSignup();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
}
  return (
    <>
      <Header />
      <div className=" min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 sm:py-5 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h1 className="text-2xl font-bold leading-tight text-green-500 ">
            Create New Account
          </h1>

          <form  className="mt-8">
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-white">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border-2 text-white border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1"
                    type="text"
                    placeholder="Full Name"
                    value={inputs.fullName}
                    onChange={(e) => {
                      setInputs({ ...inputs,fullName: e.target.value });
                    }}
                  ></input>
                </div>
              </div>
              <div>
                <label className="text-base font-medium text-white">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border-2 text-white border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1"
                    type="text"
                    placeholder="Username"
                    value={inputs.username}
                    onChange={(e) => {
                      setInputs({ ...inputs, username: e.target.value });
                    }}
                  ></input>
                </div>
              </div>
              <div>
                <label className="text-base font-medium text-white">
                  Gender
                </label>
                <div className="mt-2 text-white flex gap-2">
                  <input type="radio" name="gender" value="male" onChange={(e)=>{setInputs({...inputs,gender:e.target.value})}}
                    />
                  <label >Male</label>
                  <br />
                  <input type="radio" name="gender" value="female" onChange={(e)=>{setInputs({...inputs,gender:e.target.value})}}
                  />
                  <label >Female</label>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-white">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border-2 text-white border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    value={inputs.password}
                    onChange={(e) => {
                      setInputs({ ...inputs, password: e.target.value });
                    }}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-white">
                    Confirm your Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border-2 text-white border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Confirm your Password"
                    value={inputs.confirmPassword}
                    onChange={(e) => {
                      setInputs({ ...inputs, confirmPassword: e.target.value });
                    }}
                  ></input>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex w-full items-center justify-center rounded-md hover:scale-110 border border-black px-3.5 py-2.5 font-semibold text-white bg-black"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
