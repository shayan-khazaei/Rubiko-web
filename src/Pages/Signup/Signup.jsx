import Button from "../../Components/Button";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-[calc(100vh-176px)]">
      <h2 className="text-4xl">Sign Up</h2>
      <form
        action="submit"
        className="flex flex-col gap-5 bg-gray-900 px-10 py-16 rounded-sm"
      >
        <div>
          <input
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            required
            type="text"
            placeholder="Enter your Name"
          />
        </div>
        <div>
          <input
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            required
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <input
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            required
            type="password"
            name=""
            id=""
            placeholder="Create a Password"
          />
        </div>
        <div>
          <input
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            required
            type="password"
            name=""
            id=""
            placeholder="Confirm Your Password"
          />
        </div>
        <button className="px-4 py-1.5 rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer">
          Sign Up
        </button>
      </form>
      <div className="flex items-center gap-1">
        <span className="text-gray-800 text-lg">Already have an account ?</span>
        <Button to="/login">Log in</Button>
      </div>
    </div>
  );
}
