import { datas } from "../../../Pages/News/NewsData";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import NewsCard from "./NewsCard";
import NewsAnatomy from "./NewsAnatomy";
import { useEffect, useState } from "react";
import DeleteModal from "../../Components/DeleteModal";

export default function News() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : datas;
  });
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const nextPageHandler = () => {
    if (endIndex < posts.length) {
      setStartIndex((prev) => prev + 3);
      setEndIndex((prev) => prev + 3);
      setPageNumber((prev) => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 3);
      setEndIndex((prev) => prev - 3);
      setPageNumber((prev) => prev - 1);
    }
  };

  const deletePostHandler = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    setShowDeleteModal(false);
    setSelectedPostId(null);
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="w-[79%] mx-auto mt-auto">
      <section className="grid grid-cols-3 gap-5">
        {posts.slice(startIndex, endIndex).map((data) => (
          <NewsCard
            key={data.id}
            id={data.id}
            image={data.image}
            title={data.description}
            publisher={data.publisher}
            status={data.status}
            newsLink={data.newsLink}
            date={data.date}
            height={100}
            setShowDeleteModal={setShowDeleteModal}
            setSelectedPostId={setSelectedPostId}
          />
        ))}
      </section>
      <section className="mt-3 flex items-center justify-between">
        <div className="text-gray-300">
          Page <span>{pageNumber}</span> of{" "}
          <span className="ml-1">{Math.ceil(posts.length / 3)}</span>
        </div>
        <div className="bg-radial-[at_25%_25%] from-zinc-950 to-green-900 to-95% text-green-300">
          <button
            className=" px-2 py-2 text-xl border border-green-900 cursor-pointer "
            onClick={prevPageHandler}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            className=" px-2 py-2 text-xl border border-green-900 border-l-0 cursor-pointer "
            onClick={nextPageHandler}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </section>
      {showDeleteModal && (
        <DeleteModal
          selectedItemId={selectedPostId}
          setShowDeleteModal={setShowDeleteModal}
          setSelectedItemId={setSelectedPostId}
          deleteItemHandler={deletePostHandler}
          modalTitle="Delete The Post?"
          modalDescription=" post"
        />
      )}
      <section>
        <NewsAnatomy />
      </section>
    </div>
  );
}
