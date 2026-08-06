import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import supabase from "../../Services/Supabase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function UserProfile() {
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
        .eq("user_id", session.user.id)
        .single();

      setProfile(data);

      console.log(data);
    }

    getProfile();
  }, [session.user.id]);

  const submitForm = async (data) => {
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

      const fileName = `${session.user.id}-${crypto.randomUUID()}-img`;

      await supabase.storage.from("avatars").upload(fileName, file);

      const { data: image } = supabase.storage
        .from("avatars")
        .getPublicUrl(fileName);

      await supabase
        .from("profile")
        .update({
          avatar: image.publicUrl,
        })
        .eq("user_id", session.user.id);

      setProfile((prev) => ({
        ...prev,
        avatar: image.publicUrl,
      }));
    }

    toast.success("Profile updated");
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  return (
    <div className="flex h-[calc(100vh-176px)] border-y-2 border-green-700 ">
      <img src="" alt="" />
      <section className="flex flex-col px-5 py-7 flex-2 ">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl">User Info</h1>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <div className="bg-green-500 size-26  flex items-center justify-center rounded-full">
            <img
              src={profile?.avatar || "images/logoIcon.png"}
              alt="userAvatar"
              className="bg-white rounded-full size-24"
            />
          </div>
          <div className="">
            <h2 className="text-2xl sm:text-2xl md:text-3xl">
              {session.user.user_metadata.display_name}
            </h2>
            <span className="text-xs">User (Joined at {createdAt})</span>
          </div>
        </div>
        <div className="ml-3 mt-4">
          <h5 className="text-lg">Email Address</h5>
          <span className="text-xs">{session.user.email}</span>
        </div>
        <div className="bg-green-55 w-3xs absolute bottom-23">
          <img src="images/profilebg.png" alt="profilebg" />
        </div>
      </section>
      <section className="flex-12 bg-grey-50 flex items-center justify-center">
        <div className="flex flex-col gap-6  items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">Edit User</h2>
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-5 bg-radial-[at_25%_25%] from-green-800 to-zinc-800 to-75% px-6 py-10 md:px-10 md:py-16 rounded-sm"
          >
            <div>
              <input
                {...register("name")}
                className="px-6 py-2 md:px-20 md:py-3 rounded-sm bg-gray-300 placeholder:text-gray-600 placeholder:text-lg placeholder:text-center focus:outline-0 focus:placeholder:text-xl"
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
            <div>
              <input
                {...register("avatar")}
                className="px-19.5 py-2.5 w-[353px] rounded-sm bg-gray-300 text-gray-600 text-lg focus:outline-0 focus:placeholder:text-xl"
                type="file"
              />
            </div>
            <button
              // disabled={isLoading}
              className="px-4 py-1.5 rounded-sm text-gray-300 bg-green-800 hover:bg-green-700 transition-colors cursor-pointer disabled:bg-green-900 disabled:cursor-none"
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
