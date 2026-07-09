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
      <div className="relative bg-grey-100 shadow-sm rounded-xl cursor-pointer hover:-translate-y-1 transition-transform">
        <div>
          <img
            src={image}
            alt={`${id}Image`}
            className="rounded-t-xl h-[300px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-7 p-5">
          <span className=" text-grey-600 text-sm">
            {date} / {publisher}
          </span>
          <h2 className="uppercase text-2xl font-semibold">{description}</h2>
          <div className="absolute top-0 right-0  text-green-700 bg-grey-300 p-3 rounded-tr-xl">
            <FaArrowUpRightFromSquare />
          </div>
        </div>
      </div>
    </a>
  );
}
