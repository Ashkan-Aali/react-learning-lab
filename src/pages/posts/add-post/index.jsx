import { useState } from "react";
import { useNavigate } from "react-router";
import { createPostServices } from "../../../services/posts";

const AddPost = () => {
    const navigate = useNavigate();
    const [postToShow , setPostToShow] = useState({
        id :"" , title :"" , body:"" ,
    });

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createPostServices(postToShow);
    if (response.status === 201 ){
        // Here you would typically send the data to an API
        alert("Done successfully!");
    }
    // Clear form
    setPostToShow({id :"" , title :"" , body:""});
    navigate(-1);
}
    return (
        <div className="mx-auto w-full flex flex-col gap-4 items-center">
            <h1 className="text-xl font-bold  dark:text-gray-100 text-gray-800">افزودن پست</h1>

            <form onSubmit={handleSubmit} className="rounded w-full p-8 flex flex-col gap-8 max-w-xl bg-gradient-to-bl from-blue-50 to-blue-200 shadow-2xl">
                <div className="flex flex-col gap-2">
                    <label htmlFor="title">موضوع</label>
                    <input type="text"
                    id="title"
                    name="title"
                    placeholder="موضوع پست را وارد کنید" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="body">متن</label>
                    <textarea type="text" rows={6}
                    id="body"
                    name="body"
                    placeholder="متن مورد نظر خود را وارد کنید" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md">
                        ثبت
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;