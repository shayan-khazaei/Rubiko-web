import { useForm } from "react-hook-form";
import { GrAdd } from "react-icons/gr";

export default function AddUser() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="absolute top-80 left-196  w-xl h-100 bg-radial-[at_15%_15%] from-zinc-800 to-green-900 to-98% opacity-96 rounded-lg flex items-center justify-center">
      <div
        className="absolute top-2 right-2 text-lg text-gray-300 rotate-45 cursor-pointer"
        onClick={() => {}}
      >
        <GrAdd />
      </div>
      <section className="flex flex-col items-center gap-3">
        <h2 className="text-3xl text-gray-300">Add User</h2>
        <form onSubmit={() => {}} className="flex flex-col gap-5 ">
          <div>
            <input
              {...register("name")}
              className="px-6 py-2 md:px-20 md:py-3 rounded-sm bg-green-700 placeholder:text-gray-300 placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-xl"
              type="text"
              placeholder={"UserName"}
            />
          </div>
          <div>
            <input
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              className="px-6 py-2 md:px-20 md:py-3 rounded-sm bg-green-700 placeholder:text-gray-300 placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-xl"
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
            <select
              {...register("role")}
              className="py-2 w-full md:py-3 outline-none border-none rounded-sm bg-green-700 text-gray-300 text-lg text-center focus:outline-0 focus:text-xl cursor-pointer appearance-none"
              type="text"
            >
              <option value="user" className="pointer-events-none">
                Role
              </option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            // disabled={isLoading}
            className="px-4 py-1.5 text-xl rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer disabled:bg-green-900 disabled:cursor-none"
          >
            Add
          </button>
        </form>
      </section>
    </div>
  );
}
