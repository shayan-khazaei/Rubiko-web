import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import supabase from "../../Services/Supabase";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { session } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  if (session) navigate("/solution-guides");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitForm = async (data) => {
    const { name, email, password } = data;

    setIsLoading(true);
    const { data: AuthData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        data: {
          display_name: name,
        },
      },
    });
    setIsLoading(false);

    if (error) {
      toast.error("Email or Password is incorrect");
      return;
    }

    toast.success(`Welcome ${AuthData.user.user_metadata.display_name}`);
  };

  return (
    <div className="w-full h-[calc(100vh-176px)] flex flex-col items-center justify-center gap-6 min-h-full">
      <h2 className="text-4xl">User Login</h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-5 bg-gray-900 px-10 py-16 rounded-sm"
      >
        <div>
          <input
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            type="email"
            placeholder="Email ID"
          />
          {errors.email && (
            <p className="text-orange-600 text-sm mt-2" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-orange-600 text-sm mt-2" role="alert">
              {errors.password.message}
            </p>
          )}
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
        <button
          disabled={isLoading}
          type="submit"
          className="px-4 py-1.5 rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer disabled:bg-green-900 disabled:cursor-none"
        >
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
