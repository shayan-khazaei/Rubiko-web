import { GrAdd } from "react-icons/gr";

export default function DeleteModal({
  selectedItemId,
  setShowDeleteModal,
  setSelectedItemId,
  deleteItemHandler,
}) {
  return (
    <div className="bg-radial-[at_15%_15%] from-zinc-800 to-green-900 to-98% opacity-99 w-sm h-46 rounded-lg flex flex-col items-center fixed top-6 left-1/2 -translate-x-1/2 p-3">
      <p className="text-gray-200 relative text-2xl">Delete The User !?</p>
      <p className="text-gray-400 relative text-md text-center mt-2">
        deleted user cannot be restored and <br />
        must signup again
      </p>
      <div className="flex gap-2 absolute bottom-2 right-2">
        <button
          className="bg-radial-[at_25%_25%] from-zinc-900 to-green-900 to-70% px-10 py-3 rounded-md text-gray-200 text-lg cursor-pointer hover:to-80%"
          onClick={() => deleteItemHandler(selectedItemId)}
        >
          yes
        </button>
        <button
          className="bg-radial-[at_25%_25%] from-zinc-900 to-green-900 to-70% px-10 py-3 rounded-md text-gray-200 text-lg cursor-pointer hover:to-80%"
          onClick={() => {
            setShowDeleteModal(false);
            setSelectedItemId(null);
          }}
        >
          no
        </button>
      </div>
      <div
        className="absolute top-2 right-2 text-lg text-gray-300 rotate-45 cursor-pointer"
        onClick={() => {
          setShowDeleteModal(false);
        }}
      >
        <GrAdd />
      </div>
    </div>
  );
}
