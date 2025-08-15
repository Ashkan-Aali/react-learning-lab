import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const ShowPost = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const postTOShow = location.state?.post;

  const [postData, setPostData] = useState({
    id: postTOShow?.id,
    title: postTOShow?.title,
    body: postTOShow?.body,
  });

  return (
    <div
      key={postData.id}
      className="bg-white border border-gray-200 rounded shadow-sm  hover:shadow-md transition-shadow duration-300 w-2/5 mt-8"
    >
      <div className="bg-gradient-to-r from-blue-100 to-blue-600 h-3"></div>
      <div className="p-5">
        <h3 className="font-bold text-2xl text-gray-800 mb-3">
          {postData.title}
        </h3>
        <p className="text-gray-600 mb-4 text-xl">{postData.body}</p>
        <div className="flex justify-between items-center">
          <span className="bg-cyan-200 text-cyan-800 text-xs px-2 py-1 rounded">
            پست #{postData.id}
          </span>
          <button
            className="bg-gradient-to-r from-blue-100 to-blue-300 px-3 py-1 rounded hover:opacity-90 transition"
            onClick={() => {
              navigate(-1);
              setPostData({id:"" , title:"" , body:""});
            }}
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
