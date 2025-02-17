import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calcuateLikes } from '../slices/postSlice';

export default function Profile() {
    const [isEditMode, setIsEditMode] = useState(false)
    const [inputValue,setInputValue]=useState({
        userName:'Username',
        bio:'Bio'
    });
    const posts = useSelector((states) => states.posts.posts);
    const totalLikes = useSelector((state) => state.posts.totalLikes)
    const dispatch = useDispatch();
    // const totalLikes = dispatch(calcuateLikes())
    useEffect(() => {
        dispatch(calcuateLikes());
    }, [posts])

    const editHandler = () => {
        setIsEditMode(!isEditMode);
    }
    const onChangeHandler=(e)=>{
       const {name,value}=e.target;
       setInputValue((prev)=>({...prev,[name]:value}))

    }
    const saveForm=(e)=>{
       e.preventDefault();
       setIsEditMode(false);
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
                            (<p className='font-semibold'>{inputValue.userName}</p>)
                        }
                        {
                            isEditMode ? (
                                <textarea name='bio' value={inputValue.bio} className='outline-none border border-neutral-500 p-1 rounded-md min-h-10' onChange={onChangeHandler}></textarea>
                            ) : (

                                <p>{inputValue.bio}</p>
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
        </div>
    )
}
