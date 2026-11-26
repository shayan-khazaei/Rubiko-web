import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import supabase from "../../Services/Supabase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useAuth();
  const [profile, setProfile] = useState();

  const createdAt = new Date(session.user.created_at).toLocaleDateString(
    "en-GB"
  );

  useEffect(() => {
    async function getProfile() {
      const { data } = await supabase
        .from("profile")
        .select("*")
        .eq("id", session.user.id)
        .single();

      setProfile(data);
    }

    getProfile();
  }, [session.user.id, profile]);

  const submitForm = async (data) => {
    const hashChanges =
      data.name?.trim() || data.password?.trim() || data.avatar?.length > 0;

    if (!hashChanges) {
      toast.error("Nothing to update");

      setIsLoading(false);
      return;
    }

    if (!session.user.id) {
      toast.error("User session not found");
      return;
    }

    setIsLoading(true);

    if (data.name) {
      await supabase.auth.updateUser({
        data: {
          display_name: data.name,
        },
      });
    }

    if (data.password) {
      await supabase.auth.updateUser({
        password: data.password,
      });
    }

    if (data.avatar?.length > 0) {
      const file = data.avatar[0];

      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image");
        setIsLoading(false);
        return;
      }

      const fileName = `${session.user.id}-${crypto.randomUUID()}-img`;

      await supabase.storage.from("avatars").upload(fileName, file);

      const { data: image } = supabase.storage
        .from("avatars")
        .getPublicUrl(fileName);

      const { data: updated, error } = await supabase
        .from("profile")
        .update({
          avatar: image.publicUrl,
        })
        .eq("id", session.user.id)
        .select();

      console.log(updated);
      console.log(error);

      setProfile((prev) => ({
        ...prev,
        avatar: image.publicUrl,
      }));
    }

    setIsLoading(false);
    toast.success("Profile updated");
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-176px)] 2xl:border-y-2 2xl:border-green-700">
      <section className="flex flex-col px-2 py-1 sm:px-3 md:px-5 md:py-7 flex-2 ">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">User Info</h1>
        </div>
        <div className="flex items-center gap-3 mt-1 md:mt-8">
          <div className="bg-green-500 size:24 2xl:size-26 flex items-center justify-center rounded-full">
            <img
              src={profile?.avatar || "images/logoIcon.png"}
              alt="userAvatar"
              className="bg-white rounded-full object-cover object-center size-24 md:size-20 2xl:size-24"
            />
          </div>
          <div className="">
            <h2 className="text-3xl sm:text-4xl md:text-3xl">
              {session.user.user_metadata.display_name}
            </h2>
            <span className="text-sm md:text-xs">
              User (Joined at {createdAt})
            </span>
          </div>
        </div>
        <div className="ml-3 mt-3 sm:mt-2 md:mt-4">
          <h5 className="text-lg">Email Address</h5>
          <span className="text-xs">{session.user.email}</span>
        </div>
        <div>
          <p className="ml-3 mt-3 sm:mt-2 md:mt-6 text-lg">
            Manage data and users by <br /> clicking{" "}
            <Link className="text-green-600 text-xl" to={"/dashboard"}>
              here
            </Link>
          </p>
        </div>
        <div className="bg-green-50 md:ml-3 mt-3 sm:mt-2 md:mt-4 rounded-md p-3 text-red-700">
          <p>All users can view and manage the dashboard for now</p>
        </div>
        <div className="bg-green-55 w-45 absolute bottom-23 hidden md:block">
          <img src="images/profilebg.png" alt="profilebg" />
        </div>
      </section>

      <section className="flex-12 md:bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col gap-2 md:gap-6 items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">Edit User</h2>
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-5 sm:gap-3 bg-radial-[at_25%_25%] from-green-800 to-zinc-800 to-75% px-5 py-4 sm:px-2 sm:py-10 md:px-10 md:py-16 rounded-sm"
          >
            <div>
              <input
                {...register("name")}
                className=" sm:px-6 sm:py-2 md:px-20 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-sm md:placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-md md:focus:placeholder:text-xl"
                type="text"
                placeholder={session.user.user_metadata.display_name}
              />
            </div>
            <div>
              <input
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Password must be at least 6 characters",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
                className=" sm:px-6 sm:py-2 md:px-20 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-sm md:placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-md md:focus:placeholder:text-xl"
                type="password"
                placeholder="New Password"
              />
              {errors.password && (
                <p
                  className="text-orange-600 text-xs mt-1 md:text-sm md:mt-2"
                  role="alert"
                >
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
                className=" sm:px-6 sm:py-2 md:px-20 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-sm md:placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-md md:focus:placeholder:text-xl"
                type="password"
                placeholder="Confirm New Password"
              />
              {errors.confirmPassword && (
                <p
                  className="text-orange-600 text-xs mt-1 md:text-sm md:mt-2"
                  role="alert"
                >
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("avatar")}
                className="md:px-19.5 py-1.5 md:py-2.5 w-48.25 sm:w-60.5 md:w-88.25 rounded-sm bg-gray-300 text-gray-600 text-sm md:text-lg focus:outline-0 focus:placeholder:text-md md:focus:placeholder:text-xl"
                type="file"
                accept="image/png,image/jpeg,image/webp"
              />
            </div>
            <button
              disabled={isLoading}
              className="md:px-4 md:py-1.5 rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer disabled:bg-green-900 disabled:cursor-none"
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
