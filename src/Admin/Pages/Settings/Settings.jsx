import { useForm } from "react-hook-form";
import { FaCamera, FaRegMoon, FaRegSun, FaUser } from "react-icons/fa6";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscEditSparkle } from "react-icons/vsc";

export default function Settings() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  return (
    <div className="space-y-6 w-[79%] mx-auto">
      <section className="flex items-center rounded-lg shadow-xl p-5 border border-green-700 ">
        <section className="w-60 p-3 ">
          <div className="flex gap-3">
            <div className="text-green-500 bg-green-100 w-14 h-10 flex items-center justify-center rounded-lg">
              <FaUser />
            </div>
            <div>
              <h2 className="text-lg text-gray-100">Profile Information</h2>
              <h5 className="text-xs text-gray-300 mt-1">
                Update your personal information and profile picture.
              </h5>
              <div className="mt-3 ml-6 relative flex flex-col">
                <img
                  src="/images/mainProfile.jpg"
                  alt="adminImage"
                  className="w-16 h-16 rounded-full"
                />
                <div className="bg-gray-400 w-6 h-6 flex items-center justify-center rounded-full absolute bottom-9 left-11">
                  <FaCamera className="text-gray-600 text-xs" />
                </div>
                <h4 className="text-xs text-gray-400 mt-3 -ml-7">
                  JPG, PNG. Max size 2MB.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <div className="w-30 h-[1px] bg-green-300 rotate-90"></div>
        <section className="flex-3">
          <form
            onSubmit={handleSubmit(() => "")}
            className="flex gap-5 bg-radial-[at_25%_25%] from-green-800 to-zinc-800 to-75% px-6 py-10 md:px-10 md:py-16 rounded-sm"
          >
            <div>
              <input
                {...register("name")}
                className="px-6 py-2 md:px-20 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-xl"
                type="text"
                placeholder="User Name"
              />
            </div>
            <div>
              <input
                {...register("email")}
                className="px-6 py-2 md:px-20 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-xl"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <button
              // disabled={isLoading}
              className="px-4 py-1.5 rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer disabled:bg-green-900 disabled:cursor-none"
            >
              Update
            </button>
          </form>
        </section>
      </section>
      <section className="flex items-center rounded-lg shadow-xl p-5 border border-green-700 ">
        <section className="w-60 p-3 ">
          <div className="flex gap-3">
            <div className="text-blue-500 bg-blue-100 w-14 h-10 flex items-center justify-center rounded-lg">
              <AiOutlineSecurityScan />
            </div>
            <div>
              <h2 className="text-lg text-gray-100">Security</h2>
              <h5 className="text-xs text-gray-300 mt-1">
                Change your password and secure account.
              </h5>
            </div>
          </div>
        </section>
        <div className="w-30 h-[1px] bg-green-300 rotate-90"></div>
        <section className="flex-3">
          <form
            onSubmit={handleSubmit(() => "")}
            className="flex gap-5 bg-radial-[at_25%_25%] from-green-800 to-zinc-800 to-75% px-10 py-6 rounded-sm"
          >
            <div>
              <input
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Password must be at least 6 characters",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
                className="px-4 py-2 md:px-20 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-xl"
                type="password"
                placeholder="New Password"
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
                  validate: (value) =>
                    value === getValues("password") || "Password don't match",
                })}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                className="px-4 py-2 md:px-20 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-xl"
                type="password"
                placeholder="Confirm New Password"
              />
              {errors.confirmPassword && (
                <p className="text-orange-600 text-sm mt-2" role="alert">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              // disabled={isLoading}
              className="px-4 py-1.5 rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer disabled:bg-green-900 disabled:cursor-none"
            >
              Update
            </button>
          </form>
        </section>
      </section>
      <section className="flex items-center rounded-lg shadow-xl p-5 border border-green-700 ">
        <section className="w-60 p-3 ">
          <div className="flex gap-3">
            <div className="text-purple-500 bg-purple-100 w-14 h-10 flex items-center justify-center rounded-lg">
              <IoIosNotificationsOutline />
            </div>
            <div>
              <h2 className="text-lg text-gray-100">Notifications</h2>
              <h5 className="text-xs text-gray-300 mt-1">
                Choose what notifications you want to receive.
              </h5>
            </div>
          </div>
        </section>
        <div className="w-30 h-[1px] bg-green-300 rotate-90"></div>
        <section className="flex-3 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="text-gray-200">New User Registrations</h4>
              <h5 className="text-xs text-gray-400">
                Receive a notification when a new user registers.
              </h5>
            </div>
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="text-gray-200">New User Published</h4>
              <h5 className="text-xs text-gray-400">
                Receive a notification when a new user is Published.
              </h5>
            </div>
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="text-gray-200">System Alerts</h4>
              <h5 className="text-xs text-gray-400">
                Receive important system alerts and warnings.
              </h5>
            </div>
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="text-gray-200">Weekly Reports</h4>
              <h5 className="text-xs text-gray-400">
                Receive a weekly summary of system activity.
              </h5>
            </div>
            <input type="checkbox" className="cursor-pointer" />
          </div>
        </section>
      </section>
      <section className="flex items-center rounded-lg shadow-xl p-5 h-36 border border-green-700 ">
        <section className="w-60 p-3 ">
          <div className="flex gap-3">
            <div className="text-orange-500 bg-orange-100 w-14 h-10 flex items-center justify-center rounded-lg">
              <VscEditSparkle />
            </div>
            <div>
              <h2 className="text-lg text-gray-100">Appearance</h2>
              <h5 className="text-xs text-gray-300 mt-1">
                Customize the look and feel of the admin panel.
              </h5>
            </div>
          </div>
        </section>
        <div className="w-32 h-[1px] bg-green-300 rotate-90"></div>
        <section className="flex-3 flex gap-10">
          <div>
            <h4 className="text-gray-200">Theme</h4>
            <h5 className="text-xs text-gray-400">
              Choose your preferred theme
            </h5>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center justify-center border border-green-500 rounded-xl text-md text-gray-100 gap-2 bg-radial-[at_25%_25%] from-green-800 to-zinc-800 to-75% w-18 h-18 cursor-pointer">
              <FaRegSun className="text-xl" />
              <span>Light</span>
            </div>
            <div className="flex flex-col items-center justify-center border border-green-500 rounded-xl text-md text-gray-100 gap-2 bg-radial-[at_25%_25%] from-green-800 to-zinc-800 to-75% w-18 h-18 cursor-pointer">
              <FaRegMoon className="text-xl" />
              <span>Dark</span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
