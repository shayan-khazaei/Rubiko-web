import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import supabase from "../../Services/Supabase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const submitForm = async (data) => {
    const { name, email, password } = data;

    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
        },
      },
    });

    if (error) {
      toast.error("Something went wrong...");
      return;
    }

    toast.success("User Created Successfully");
    console.log(user);
    navigate("/solution-guides");
  };

  return (
    <div
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center justify-center gap-6 h-[calc(100vh-176px)]"
    >
      <h2 className="text-4xl">Sign Up</h2>
      <form
        action="submit"
        className="flex flex-col gap-5 bg-gray-900 px-10 py-16 rounded-sm"
      >
        <div>
          <input
            {...register("name", {
              required: "name is required",
            })}
            aria-invalid={errors.password ? "true" : "false"}
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 6 characters",
              },
            })}
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
        <div>
          <input
            {...register("confirmPassword", {
              required: "Please Confirm Your Password",
              validate: (value) =>
                value === getValues("password") || "Password don't match",
            })}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
            className="px-6 py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:outline-0 focus:placeholder:text-xl"
            type="password"
            placeholder="Confirm Your Password"
          />
          {errors.confirmPassword && (
            <p className="text-orange-600 text-sm mt-2" role="alert">
              {errors.confirmPassword.message}
            </p>
          )}
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
