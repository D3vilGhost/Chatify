import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";

export default function LogInPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  const input_field =
    "flex h-10 w-full px-3 py-2 rounded-md border border-black bg-transparent text-sm placeholder:text-gray focus:outline-none focus:ring-1 focus:ring-white";

  return (
    <div
      className="border-2 rounded-xl border-black
                    backdrop-blur-xl
                    p-[7%]
                    grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2
                    text-md font-semibold
                    h-fit
                  "
    >
      <div
        className="row-span-6
        text-center self-center"
      >
        <div className="font-extrabold text-3xl md:text-4xl">CHATIFY</div>
        <br />
        <div>A user-friendly, end-to-end encrypted chat app, crafted by</div>
        <a
          href="https://www.linkedin.com/in/kartik3y-ag/"
          target="blank"
          className="font-bold hover:underline "
        >
          Kartikey Agarwal
        </a>
      </div>
      <br className="md:hidden"/>
      <div>
        <h2
          className="md:col-span-2 self-center
                    text-xl font-extrabold text-center
                    "
        >
          User Login
        </h2>
      </div>
      <hr className="border-gray-700 border" />
      <div>
        Username:
        <input
          className={input_field}
          type="email"
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
        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-md hover:scale-110 border border-black px-3.5 py-2.5 font-semibold text-white bg-black"
          onClick={handleSubmit}
        >
          Log in
        </button>
      </div>
      <div className="text-center col-span-1 md:col-span-2 text-sm">
        Dont Have An Account?{" "}
        <Link to="/signup" className="font-bold hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );
}
