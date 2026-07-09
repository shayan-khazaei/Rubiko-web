import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-full h-[calc(100vh-176px)]  to-grey-300 to-99.9% flex flex-col items-center justify-center gap-6 min-h-full">
      <h2 className="text-4xl">User Login</h2>
      <form
        action="submit"
        className="flex flex-col gap-5 bg-gray-900 px-10 py-16 rounded-sm"
      >
        <div>
          <input
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            required
            type="email"
            placeholder="Email ID"
          />
        </div>
        <div>
          <input
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            required
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-300">
          <div className="flex items-center gap-1.5">
            <input className="cursor-pointer" type="checkBox" name="" id="" />
            <label>Remember me</label>
          </div>
          <div>
            <span className="cursor-pointer">Forgot Password ?</span>
          </div>
        </div>
        <button className="px-4 py-1.5 rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer">
          Log in
        </button>
      </form>

      <Link
        to="/signup"
        className="px-4 py-1.5 rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer"
      >
        Sign Up
      </Link>
    </div>
  );
}
