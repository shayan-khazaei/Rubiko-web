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
  anatomyCard,
}) {
  return (
    <div
      className={`rounded-xl flex flex-col p-2.5 space-y-2 bg-radial-[at_25%_25%] from-green-800 to-zinc-800 to-75% border border-gray-600`}
    >
      <section className="relative flex gap-5">
        <img
          src={image}
          alt="cardImage"
          className={`rounded-xl ${
            anatomyCard ? "h-30" : "h-50"
          }  w-full brightness-75`}
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
        <h1 className="max-w-[60%] my-2 text-gray-300">{title}</h1>
      </section>
      <div className="h-[1px] bg-gray-200"></div>
      <section className="flex items-center justify-between px-2">
        <div className="flex items-center gap-1 text-gray-400">
          <CiUser /> {publisher}
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <MdOutlineDateRange /> {date}
        </div>
      </section>
      <div className="h-[1px] bg-gray-200"></div>
      <section className="flex items-center justify-between px-2 text-sm">
        <div className="flex items-center gap-1 text-green-300 cursor-pointer">
          <MdEdit /> Edit
        </div>
        <div className="flex items-center gap-1 text-red-300 cursor-pointer">
          <MdDelete /> Delete
        </div>
        <div className="flex items-center gap-1 text-gray-300 cursor-pointer">
          <GrView /> View
        </div>
      </section>
    </div>
  );
}
