import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../slices/postSlice";

const CreatePost = React.memo(() => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        id: "",
        title: "",
        date: "",
        blogContent: "",
        likes: 0,
    });

    useEffect(() => {
        if (location.state?.post) {
            setInputValue({
                id: location.state.post.id || "",
                title: location.state.post.title || "",
                date: location.state.post.date || "",
                blogContent: location.state.post.blogContent || "",
                likes: location.state.post.likes || 0,
            });
        }
    }, [location.state]);
    const onChangehandle = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({ ...prevState, [name]: value }));
    }
    const submithandler = (e) => {
        e.preventDefault();
        const post = {
            id: inputValue.id || uuidv4(),
            title: inputValue.title,
            blogContent: inputValue.blogContent,
            date: inputValue.date || new Date().toISOString(),
            likes: inputValue.likes,

        }
        if (inputValue.id) {
            dispatch(updatePost(post));
        } else {
            dispatch(addPost(post));
        }

        navigate("/");
    }
    return (
        <form className="flex-1 p-2 md:p-10" onSubmit={submithandler} >
            <div>
                <div>
                    <input type="text" name="title" onChange={onChangehandle} value={inputValue.title} id="title" placeholder="Title" autoFocus className="w-full border-b border-fuchsia-400 p-1 mb-4 outline-none" />
                </div>
                <div className="mb-4 flex justify-start gap-x-8">
                    <input type="submit" value="Publish" className="bg-fuchsia-700 createPostButtons" />
                </div>
            </div>
            <div>
                <textarea name="blogContent" onChange={onChangehandle} value={inputValue.blogContent} id="blogContent" className="w-full min-h-svh border border-solid border-gray-400 p-4 outline-none"></textarea>
            </div>
        </form>
    )
});

export default CreatePost;