import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="mx-auto w-auto h-screen text-center flex flex-col items-center justify-center bg-stone-900">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          CHATIFY
        </h1>
        <p className="mt-6 text-lg leading-8 text-white ">
          A Simple, End-to-End Encrypted Chating App Developed By <br />-{" "}
          <a
            href="https://www.linkedin.com/in/kartik3y-ag/"
            target="blank"
            className="underline text-blue-400 hover:text-blue-700 font-bold"
          >
            Kartikey Agarwal
          </a>
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-4">
        <Link
          to="/login"
          className="rounded-md bg-black px-3 py-2 text-lg font-semibold text-white hover:scale-110 "
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="rounded-md bg-black px-3 py-2 text-lg font-semibold text-white hover:scale-110"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
