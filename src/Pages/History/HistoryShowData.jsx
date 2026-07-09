import { BiDotsHorizontalRounded } from "react-icons/bi";
import { datas } from "./HistoryData";

export default function HistoryShowData() {
  return (
    <div>
      <ul
        id="history-list"
        className=" flex flex-col items-center justify-center gap-32 py-5"
      >
        {datas.map((data) => (
          <li className="flex items-start gap-10" key={data.id}>
            <div className=" text-5xl text-grey-800 font-sans font-semibold">
              {data.id}
            </div>
            <div>
              <BiDotsHorizontalRounded className="text-7xl text-green-600" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl text-justify max-w-sm ">
                {data.description}
              </p>
              {data.image && (
                <img
                  src={data.image}
                  alt={`${data.id}picture`}
                  className="w-[400px] rounded-xl"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
