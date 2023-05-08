import { useEffect, useState } from "react";

export default function PostsPage() {
  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    fetch(`https://basic-authentification-api.vercel.app/allPost`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  });

  if (postInfo?.length === 0) {
    return (
      <h1 className=" pt-32 px-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        sorry you need to add something to display
      </h1>
    );
  }

  if (postInfo === null) {
    return (
      <h1 className=" pt-32 px-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Please login first
      </h1>
    );
  }

  return (
    <>
      <h1 className=" pt-32 px-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        All your posts
      </h1>
      {postInfo?.map((info) => {
        async function deletePost(ev) {
          ev.preventDefault();
          await fetch(
            "https://basic-authentification-api.vercel.app/deletePost",
            {
              method: "DELETE",
              body: JSON.stringify({ _id: info._id }),
              headers: { "Content-Type": "application/json" },
              credentials: "include",
            }
          );
        }
        return (
          <div className="w-screen flex justify-center items-center p-8">
            <div className="max-w-lg p-8 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                title: {info.title}
              </h1>
              <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                summary: {info.summary}
              </h1>
              <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                content: {info.content}
              </h1>
              <button
                onClick={deletePost}
                type="button"
                className=" my-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                delete post
              </button>
            </div>
          </div>
        );
      })}{" "}
    </>
  );
}
