import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CreatePost = React.memo(({ getPosts }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        id: "",
        title: "",
        date: "",
        blogContent: "",
    });

    useEffect(() => {
        if (location.state?.post) {
            setInputValue({
                id: location.state.post.id || "",
                title: location.state.post.title || "",
                blogContent: location.state.post.blogContent || "",
            });
        }
    }, [location.state]);
    const onChangehandle = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({ ...prevState, [name]: value }));
    }
    const submithandler = (e) => {
        e.preventDefault();
        const post={
            id: inputValue.id||uuidv4(),
            title:inputValue.title,
            blogContent:inputValue.blogContent,
            date: inputValue.date||new Date().toISOString(),
        }
        getPosts(post);

        navigate("/");
    }
    return (
        <form className="flex-1 p-10" onSubmit={submithandler} >
            <div>
                <div>
                    <input type="text" name="title" onChange={onChangehandle} value={inputValue.title} id="title" placeholder="Title" className="w-full border-b border-fuchsia-400 p-1 mb-4 outline-none" />
                </div>
                <div className="mb-4 flex justify-start gap-x-8">
                    <input type="submit" value="Publish" className="bg-fuchsia-700 createPostButtons" />
                    <input type="button" value='Preview' className="bg-gray-500  createPostButtons active:bg-gray-400 active:text-gray-700 hover:opacity-70" />
                </div>
            </div>
            <div>
                <textarea name="blogContent" onChange={onChangehandle} value={inputValue.blogContent} id="blogContent" className="w-full min-h-svh border border-solid border-gray-400 p-4 outline-none"></textarea>
            </div>
        </form>
    )
});

export default CreatePost;