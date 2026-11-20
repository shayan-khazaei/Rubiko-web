import { useForm } from "react-hook-form";
import { GrAdd } from "react-icons/gr";
import supabase from "../../../Services/Supabase";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddUser({onClose}) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    const { name, email, role, password } = data;
    setIsLoading(true);

    const { data: authData, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
        },
      },
    });

    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }

    const user = authData.user;

    if (user) {
      const { error: profileError } = await supabase
        .from("profile")
        .insert([{ id: user.id, display_name: name, role: role }]);

      if (profileError) {
        setIsLoading(false);
        toast.error(profileError.message);
        return;
      }
    }

    setIsLoading(false);

    toast.success("User Created Successfully, Please Confirm email to sign in");
    toast.success("User must change the password later");
  };

  return (
    <div className="absolute top-58 left-186 w-xl h-134 bg-radial-[at_15%_15%] from-zinc-800 to-green-900 to-98% opacity-96 rounded-lg flex items-center justify-center">/
      <div
        className="absolute top-2 right-2 text-lg text-gray-300 rotate-45 cursor-pointer"
        onClick={onClose}
      >
        <GrAdd />
      </div>
      <section className="flex flex-col items-center gap-3">
        <h2 className="text-3xl text-gray-300">Add User</h2>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-5 "
        >
          <div>
            <input
              {...register("name", { required: "Enter User Name" })}
              aria-invalid={errors.name ? "true" : "false"}
              className="px-6 py-2 md:px-20 md:py-3 rounded-sm bg-green-700 text-gray-300 placeholder:text-gray-300 text-lg placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-xl"
              type="text"
              placeholder={"UserName"}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("email", { required: "Enter User Email" })}
              aria-invalid={errors.email ? "true" : "false"}
              className="px-6 py-2 md:px-20 md:py-3 rounded-sm bg-green-700 text-gray-300 placeholder:text-gray-300 text-lg placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-xl"
              type="email"
              placeholder="Email ID"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <select
              {...register("role", { required: "Please select a role" })}
              aria-invalid={errors.role ? "true" : "false"}
              className="py-2 w-full md:py-3 outline-none border-none rounded-sm bg-green-700 text-gray-300 text-lg text-center focus:outline-0 focus:text-xl cursor-pointer appearance-none"
              type="text"
            >
              <option value="" className="pointer-events-none">
                Role
              </option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && (
              <p className="text-red-400 text-sm mt-2">{errors.role.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
              className="py-2 w-full md:py-3 outline-none border-none rounded-sm bg-green-700 text-gray-300 placeholder:text-gray-300 text-lg placeholder:text-lg text-center focus:outline-0 focus:placeholder:text-xl cursor-pointer appearance-none"
              type="password"
              placeholder="Enter a simple password"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-2" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            disabled={isLoading}
            className="px-4 py-1.5 text-xl rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer disabled:bg-green-900 disabled:cursor-none"
          >
            Add
          </button>
        </form>
      </section>
    </div>
  );
}
