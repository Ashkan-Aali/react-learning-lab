import { Link } from "react-router";

const PostsBox = ({ posts }) => {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <div className="bg-gradient-to-r from-blue-100 to-blue-600 h-3"></div>
          <div className="p-5">
            <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-1">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {post.body}
            </p>
            <div className="flex justify-between items-center">
              <span className="bg-cyan-200 text-cyan-800 text-xs px-2 py-1 rounded">
                پست #{post.id}
              </span>
              <Link to={`/posts/show-post/:${post.id}`} className="text-sm bg-gradient-to-r from-blue-100 to-blue-300 px-3 py-1 rounded hover:opacity-90 transition" state={{post}}>
                ادامه مطلب
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsBox;
