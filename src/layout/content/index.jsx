import { Routes, Route, Navigate } from "react-router";
import UsersPage from "../../pages/users";
import PostsPage from "../../pages/posts";
import CommentsPage from "../../pages/comments";
import TasksPage from "../../pages/tasks";
import GalleriesPage from "../../pages/galleries";
import AddUserPage from "../../pages/users/add-user";
import AddPost from "../../pages/posts/add-post";
import ShowPost from "../../pages/posts/_components/ShowPost";

const Content = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-100 dark:bg-gray-600 pr-64 pt-16 overflow-auto">
      <div className="p-4 flex justify-center">
        <Routes>
          <Route path="/users" element={<UsersPage />}/> 
          <Route path="/users/add-user" element={<AddUserPage />} /> 
          <Route path="/users/edit-user/:id" element={<AddUserPage />} /> 
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/add-post" element={<AddPost />} /> 
          <Route path="/posts/show-post/:id" element={<ShowPost />} /> 
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/gallery" element={<GalleriesPage />} />
          <Route path="/" element={<Navigate to={"/users"} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
