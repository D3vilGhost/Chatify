import { useState } from "react";
import useSignup from "../hooks/useSignUp.js";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
export default function SignUpPage() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };
  const input_field =
    "flex h-10 w-full px-3 py-2 rounded-md border border-black bg-transparent text-sm placeholder:text-gray focus:outline-none focus:ring-1 focus:ring-white";

  return (
    <div
      className="border-2 rounded-xl border-black
                    backdrop-blur-xl
                    p-[7%]
                    grid grid-cols-1 md:grid-cols-2 gap-2
                    text-md font-semibold
                    h-fit
                  "
    >
      <h1
        className="md:col-span-2 self-center
                    text-2xl font-extrabold text-center
                    "
      >
        <Link
          to="/"
          className="text-3xl hover:text-white col-span-1 md:col-span-2 flex"
        >
          <IoIosArrowRoundBack />
        </Link>
        Create Account
      </h1>
      <hr className="border-gray-700 border col-span-1 md:col-span-2" />
      <div>
        Full Name:
        <input
          className={input_field}
          type="text"
          placeholder="Full Name"
          value={inputs.fullName}
          onChange={(e) => {
            setInputs({ ...inputs, fullName: e.target.value });
          }}
        />
      </div>
      <div>
        Username:
        <input
          className={input_field}
          type="text"
          placeholder="Username"
          value={inputs.username}
          onChange={(e) => {
            setInputs({ ...inputs, username: e.target.value });
          }}
        />
      </div>
      <div>
        Password:
        <input
          className={input_field}
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
        />
      </div>
      <div>
        Verify Password:
        <input
          className={input_field}
          type="password"
          placeholder="Password"
          value={inputs.confirmPassword}
          onChange={(e) => {
            setInputs({ ...inputs, confirmPassword: e.target.value });
          }}
        />
      </div>
      <div>
        Gender:
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => {
            setInputs({ ...inputs, gender: e.target.value });
          }}
        />{" "}
        Male{"  "}
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => {
            setInputs({ ...inputs, gender: e.target.value });
          }}
        />{" "}
        Female
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
  );
}
