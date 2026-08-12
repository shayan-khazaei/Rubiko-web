import { CgArrowLongRightC } from "react-icons/cg";
import NewsCard from "./NewsCard";

export default function NewsAnatomy() {
  const newsStatus = [
    {
      title: "Published",
      description: "News is Live and visible to users",
      color:
        "bg-radial-[at_25%_25%] from-zinc-950 to-green-900 to-95% text-green-300",
    },
    {
      title: "Draft",
      description: "News is saved but not published yet",
      color: "bg-radial-[at_25%_25%] from-zinc-600 to-gray-100 to-95%",
    },
    {
      title: "Pending",
      description: "News is waiting for review/approval",
      color: "bg-radial-[at_25%_25%] from-zinc-100 to-orange-900 to-95%",
    },
    {
      title: "Scheduled",
      description: "News will be published on a future date",
      color: "bg-radial-[at_25%_25%] from-zinc-100 to-blue-900 to-95%",
    },
    {
      title: "Archived",
      description: "News is archived and not visible",
      color: "bg-radial-[at_25%_25%] from-zinc-100 to-purple-900 to-95%",
    },
    {
      title: "Deleted",
      description: "News has been deleted",
      color: "bg-radial-[at_25%_25%] from-zinc-100 to-red-900 to-95%",
    },
  ];

  return (
    <div className="relative flex items-center bg-gray-100 mt-1 px-10 rounded-xl">
      <section className="absolute top-2 flex items-center justify-between w-[65%] text-xl text-green-700">
        <h2 className="mt-1">Card Anatomy</h2>
        <h2>Status Badges</h2>
      </section>
      <section className="flex-3 h-100 flex items-center ">
        <div className="w-75 relative">
          <NewsCard
            image="/images/publicimage.jpg"
            title="News Title Goes Here"
            publisher="Author"
            status="Published"
            date="Jan 14, 2026"
            height={70}
            imageHeight={30}
          />
          <div className="absolute top-2 -right-50">
            <div className="flex items-center gap-1 text-green-600">
              <div>
                <CgArrowLongRightC className="text-3xl" />
              </div>
              <div className="flex flex-col ">
                <h2>Status Badge</h2>
                <h5 className="text-gray-500 text-xs">
                  Shows the current status of the news
                </h5>
              </div>
            </div>
            <div className="flex items-center gap-1 text-blue-600">
              <div>
                <CgArrowLongRightC className="text-3xl" />
              </div>
              <div className="flex flex-col ">
                <h2>Thumbnail / Image</h2>
                <h5 className="text-gray-500 text-xs">
                  Represents the news visually
                </h5>
              </div>
            </div>
            <div className="flex items-center gap-1 text-yellow-600 mt-8">
              <div>
                <CgArrowLongRightC className="text-3xl" />
              </div>
              <div className="flex flex-col ">
                <h2>Title</h2>
                <h5 className="text-gray-500 text-xs">
                  Main headline of the news
                </h5>
              </div>
            </div>
            <div className="flex items-center gap-1 text-blue-800 mt-3">
              <div>
                <CgArrowLongRightC className="text-3xl" />
              </div>
              <div className="flex flex-col ">
                <h2>Meta Info</h2>
                <h5 className="text-gray-500 text-xs">
                  Author and publish date
                </h5>
              </div>
            </div>
            <div className="flex items-center gap-1 text-green-900 mt-1">
              <div>
                <CgArrowLongRightC className="text-3xl" />
              </div>
              <div className="flex flex-col ">
                <h2>Actions</h2>
                <h5 className="text-gray-500 text-xs">
                  Edit, Delete and View actions
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-2">
        <div className="border border-gray-200 rounded-xl px-3 py-2">
          {newsStatus.map((status) => (
            <>
              <div className="flex justify-between my-2">
                <div className={`${status.color} px-2 py-1 rounded-xl`}>
                  {status.title}
                </div>
                <div className="w-80">{status.description}</div>
              </div>
              <div className="h-[1px] bg-gray-200"></div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
