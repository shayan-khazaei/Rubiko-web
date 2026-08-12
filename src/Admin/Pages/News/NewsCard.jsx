import { CiUser } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { MdDelete, MdEdit, MdOutlineDateRange } from "react-icons/md";

export default function NewsCard({
  image,
  title,
  status,
  publisher,
  date,
  height: h,
  imageHeight: imgH,
}) {
  return (
    <div
      className={`rounded-xl h-${h} flex flex-col p-2.5 space-y-2 bg-gray-100 border border-gray-200`}
    >
      <section className="relative flex gap-5">
        <img
          src={image}
          alt="cardImage"
          className={`rounded-xl h-${imgH} w-full brightness-75`}
        />
        <div className="absolute top-2 right-2 flex items-center">
          <div className="bg-green-950 text-green-500 px-1 h-6 rounded-tl-md rounded-bl-md flex items-center">
            <GoDotFill />
          </div>
          <span className="bg-radial-[at_25%_25%] from-zinc-950 to-green-900 to-95% text-green-300 px-2 h-6 rounded-tr-md rounded-br-md">
            {status}
          </span>
        </div>
      </section>
      <section className="px-2">
        <h1 className="max-w-[60%]  my-2">{title}</h1>
      </section>
      <div className="h-[1px] bg-gray-200"></div>
      <section className="flex items-center justify-between px-2">
        <div className="flex items-center gap-1">
          <CiUser /> {publisher}
        </div>
        <div className="flex items-center gap-1">
          <MdOutlineDateRange /> {date}
        </div>
      </section>
      <div className="h-[1px] bg-gray-200"></div>
      <section className="flex items-center justify-between px-2 text-sm">
        <div className="flex items-center gap-1 text-green-700 cursor-pointer">
          <MdEdit /> Edit
        </div>
        <div className="flex items-center gap-1 text-red-700 cursor-pointer">
          <MdDelete /> Delete
        </div>
        <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
          <GrView /> View
        </div>
      </section>
    </div>
  );
}
