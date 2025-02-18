import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calcuateLikes } from '../slices/postSlice';

export default function Profile() {
    const [isEditMode, setIsEditMode] = useState(false)
    const [inputValue, setInputValue] = useState({
        userName: 'Username',
        bio: 'Bio'
    });
    const posts = useSelector((states) => states.posts.posts);
    const totalLikes = useSelector((state) => state.posts.totalLikes)
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        userName: "Username",
        bio: "Bio"
    })
    // const totalLikes = dispatch(calcuateLikes())
    useEffect(() => {
        dispatch(calcuateLikes());
    }, [posts])

    const editHandler = () => {
        setIsEditMode(!isEditMode);
    }
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({ ...prev, [name]: value }))

    }
    const saveForm = async (e) => {
        e.preventDefault();
        setIsEditMode(false);

        //These are simulation of fetching data from node js application 
        try {
            const response = await fetch("http://localhost:3000/addName", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userName: inputValue.userName,
                    bio: inputValue.bio
                }),
            });
            if (!response.ok) {
                throw new Error("Failed to create new user")
            }
            const data = await response.json();
        } catch (err) {
            console.error("Error adding user: ", err);
        }
        try {
            const response = await fetch("http://localhost:3000/", {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error("Failed getting the data from API");
            }
            const data = await response.json();
            setUserData(data);
            console.log(data);
        } catch (err) {
            console.error("An error occurred: ", err);
        }

    }

    return (
        <div className='p-5'>
            <form className='flex flex-row justify-start items-start gap-x-7 md:gap-x-14 w-full' onSubmit={saveForm}>
                <div>
                    <img className='rounded-full' src="https://c.disquscdn.com/uploads/users/35966/8923/avatar92.jpg?1723087776" alt="pfp" />
                </div>
                <div className='flex flex-col gap-y-4'>

                    <div className='flex flex-row justify-start gap-x-3'>
                        <p> <em className='not-italic font-bold'>{posts.length}</em> Posts</p>
                        <p><em className='not-italic font-bold'>{totalLikes}</em> Likes</p>

                    </div>
                    <div className='flex flex-col gap-y-4'>
                        {isEditMode ?
                            (<input className='border border-neutral-500 p-1 rounded-md outline-none' name='userName' value={inputValue.userName} onChange={onChangeHandler} type='text' placeholder='Username' />)
                            :
                            (<p className='font-semibold'>{userData.userName}</p>)
                        }
                        {
                            isEditMode ? (
                                <textarea name='bio' value={inputValue.bio} className='outline-none border border-neutral-500 p-1 rounded-md min-h-10' onChange={onChangeHandler}></textarea>
                            ) : (

                                <p>{userData.bio}</p>
                            )
                        }
                    </div>

                </div>
                {
                    isEditMode ? (<input type='submit' value='Save' className='bg-gradient-to-r from-fuchsia-400 to-fuchsia-900 text-white p-1 pl-2 pr-2 cursor-pointer rounded-lg' />) : (

                        <div>
                            <p onClick={editHandler} className=' bg-gradient-to-r from-fuchsia-400 to-fuchsia-900 text-white p-1 pl-2 pr-2 cursor-pointer rounded-lg'>Edit Profile</p>
                        </div>
                    )
                }

            </form>
            <div className='mt-5 p-3 bg-yellow-200'>
                <p>This will not work now cause I am simulating the fetch api from node js server.</p>
                <p>Will integrate with the backend in later on.</p>
            </div>
        </div>
    )
}
