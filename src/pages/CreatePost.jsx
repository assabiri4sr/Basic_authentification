import { useState } from "react";
import { Navigate } from "react-router";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createPost(ev) {
    ev.preventDefault();
    await fetch("https://basic-authentification-api.vercel.app/post", {
      method: "POST",
      body: JSON.stringify({ title, summary, content }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    setRedirect(true);
  }
  if (redirect) {
    return <Navigate to={"/allPost"} />;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center p-8">
      <form className="mt-8 max-w-lg w-96" onSubmit={createPost}>
        <div className="py-8 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="px-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create post:
          </h1>
          <div className="my-6 px-8">
            <label
              htmlFor="username"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your title:
            </label>
            <input
              type="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              required
            />
          </div>
          <div className="my-6 px-8">
            <label
              htmlFor="username"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your summary:
            </label>
            <input
              type="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              value={summary}
              onChange={(ev) => setSummary(ev.target.value)}
              required
            />
          </div>
          <div className="my-6 px-8">
            <label
              htmlFor="username"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your content:
            </label>
            <input
              type="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              value={content}
              onChange={(ev) => setContent(ev.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-8 p-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
