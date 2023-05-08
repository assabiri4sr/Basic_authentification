import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://basic-authentification-api.vercel.app/postPage/${id}`).then(
      (response) => {
        response.json().then((postInfo) => {
          setPostInfo(postInfo);
        });
      }
    );
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center p-8">
      <div className="max-w-lg py-8 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="px-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          title: {postInfo?.title}
        </h1>
        <h1 className="px-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          summary: {postInfo?.summary}
        </h1>
        <h1 className="px-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          content: {postInfo?.content}
        </h1>
      </div>
    </div>
  );
}
