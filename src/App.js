import { Route, Routes } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import LoginPages from "./pages/LoginPages";
import Navbar from "./pages/Navbar";
import CreatePost from "./pages/CreatePost";
import { UserContextProvider } from "./UserContext";
import PostPage from "./pages/PostPage";
import PostsPage from "./pages/PostsPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/postPage/:id" element={<PostPage />} />
        <Route path="/allPost" element={<PostsPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
