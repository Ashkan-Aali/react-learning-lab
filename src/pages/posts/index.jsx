import { useEffect, useState } from "react";
import { getPostServices } from "../../services/posts";
import PostsBox from "./_components/PostsBox";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router";

const PostsPage = () => {
    const [posts , setPosts] = useState([]);

    const handeleGetPosts = async () => {
        try {
            const data = await getPostServices();
            setPosts(data.slice(0 , 12) || [])
            console.log(posts);
        } catch(error) {
            console.error(error) ;
        }
    };

    useEffect(() => {
    handeleGetPosts();
    }, []);

    return (
<div className="space-y-4 w-[70%]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">پست های اخیر</h1>
        <Link
          to={"/posts/add-post"}
          className="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <FaUserPlus />
          <span>افزودن پست</span>
        </Link>
      </div>

      <PostsBox posts={posts}/>
    </div>
    );
};

export default PostsPage;