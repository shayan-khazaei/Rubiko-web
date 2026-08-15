import Button from "../../Components/Button";

export default function ReportsRankCard({ data, attempt }) {
  return (
    <div>
      <section>
        <div className="w-full flex justify-between items-center px-5 mb-1">
          <h2 className="text-xl text-gray-100">
            {attempt ? "Top Users" : "Best Times (All Time)"}
          </h2>
          <div className="relative">
            <Button>View all</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="p-4 mx-4 rounded-lg shadow-xl flex flex-col justify-center border border-grey-700">
          {data.slice(0, 5).map((user) => (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 px-2 py-1 rounded-xl text-gray-200">
                <span className="text-xl"> {user.id} </span>
                <img
                  src={user.image}
                  alt="userImg"
                  className="w-8 h-8 rounded-full"
                />
                <span>{user.user}</span>
              </div>
              <div>
                <span className="text-sm text-gray-300">
                  {user.count} {attempt && "attempt"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}