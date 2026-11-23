import { useEffect, useState } from "react";
import Button from "../../Components/Button";

export default function ReportsRankCard({ data, attempt }) {
  const [showTopTimeModal, setShowTopTimeModal] = useState(false);

  useEffect(() => {
    if (!showTopTimeModal) return;

    const timer = setTimeout(() => {
      setShowTopTimeModal(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showTopTimeModal]);

  return (
    <div>
      <section>
        <div className="w-full flex justify-between items-center px-5 mb-1">
          <h2 className="text-xl text-gray-100">
            {attempt ? "Top Users" : "Best Times (All Time)"}
          </h2>
          <div className="relative">
            <Button
              onClick={() => {
                setShowTopTimeModal((prev) => !prev);
              }}
            >
              View all
            </Button>
          </div>
          {showTopTimeModal && (
            <div className="bg-radial-[at_15%_15%] from-zinc-900 to-green-600 to-88% border border-2 border-orange-800 opacity-99 w-xs rounded-lg flex flex-col items-center fixed top-6 left-1/2 -translate-x-1/2 p-3">
              <p className="text-gray-300 text-center">
                This section will be implemented once <br /> the users' record
                is recorded. <br />
              </p>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="p-4 mx-4 rounded-lg shadow-xl flex flex-col justify-center border border-green-700">
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
