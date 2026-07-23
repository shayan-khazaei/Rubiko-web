import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import supabase from "../../Services/Supabase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const submitForm = async (data) => {
    const { name, email, password } = data;

    setIsLoading(true);
    const { user, error } = await supabase.auth.signUp({
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
      toast.error(error.message);
      return;
    }

    toast.success(
      "User Created Successfully, Please Confirm Your email to sign in"
    );
    console.log(user);
    navigate("/solution-guides");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 h-[calc(100vh-176px)]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl">Sign Up</h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-5 bg-gray-900 px-6 py-10 md:px-10 md:py-16 rounded-sm"
      >
        <div>
          <input
            {...register("name", {
              required: "name is required",
            })}
            aria-invalid={errors.password ? "true" : "false"}
            className="px-4 py-2 md:px-6 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            type="text"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-orange-600 text-sm mt-2" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            className="px-4 py-2 md:px-6 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 6 characters",
              },
            })}
            aria-invalid={errors.password ? "true" : "false"}
            className="px-4 py-2 md:px-6 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-orange-600 text-sm mt-2" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("confirmPassword", {
              required: "Please Confirm Your Password",
              validate: (value) =>
                value === getValues("password") || "Password don't match",
            })}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
            className="px-4 py-2 md:px-6 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            type="password"
            placeholder="Confirm Your Password"
          />
          {errors.confirmPassword && (
            <p className="text-orange-600 text-sm mt-2" role="alert">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          disabled={isLoading}
          className="px-4 py-1.5 rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer disabled:bg-green-900 disabled:cursor-none"
        >
          Sign Up
        </button>
      </form>
      <div className="flex items-center gap-1">
        <span className="text-gray-800 md:text-lg">
          Already have an account ?
        </span>
        <Button to="/login">Log in</Button>
      </div>
    </div>
  );
}
