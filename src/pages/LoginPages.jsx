import { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";

export default function LoginPages() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo, userInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch(
      "https://basic-authentification-api.vercel.app/login",
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    } else {
      alert("wrong credentials");
    }
  }
  useEffect(() => {
    fetch("https://basic-authentification-api.vercel.app/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const id = userInfo?.id;
  if (id) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center p-8">
      <form className="mt-8 max-w-lg w-96" onSubmit={login}>
        <div className="py-8 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="px-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login:
          </h1>
          <div className="my-6 px-8">
            <label
              htmlFor="username"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your username:
            </label>
            <input
              type="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              required
            />
          </div>
          <div className="my-6 px-8">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password:
            </label>
            <input
              type="password"
              id="password"
              className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              required
            />
            <button
              type="submit"
              className="m-8 p-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
