import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function NewsCard({
  id,
  image,
  date,
  publisher,
  description,
  newsLink,
}) {
  return (
    <a href={newsLink} target="blank">
      <div className="relative bg-gray-100 shadow-sm shadow-green-900 rounded-xl cursor-pointer hover:-translate-y-1 transition-transform">
        <div>
          <img
            src={image}
            alt={`${id}Image`}
            className="rounded-t-xl lg:h-[300px] w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-7 p-5">
          <span className=" text-gray-600 text-sm">
            {date} / {publisher}
          </span>
          <h2 className="uppercase text-xl md:text-2xl font-semibold">
            {description}
          </h2>
          <div className="absolute top-0 right-0 text-green-300 bg-radial-[at_25%_25%] from-green-800 to-zinc-800 to-75% p-2 md:p-3 rounded-tr-xl">
            <FaArrowUpRightFromSquare />
          </div>
        </div>
      </div>
    </a>
  );
}
