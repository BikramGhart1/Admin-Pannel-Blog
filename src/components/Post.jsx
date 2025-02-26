import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../slices/postSlice';

const Post = React.memo(({ post }) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        const isConfirmed = confirm("Are you sure you want to delete this post?");
        if (isConfirmed) {

            dispatch(deletePost(post));
            alert("Post deleted");
        } else {
            return;
        }
    }
    return (
        <div
            className='p-2 border border-solid border-gray-400 relative max-h-48 flex flex-col rounded-lg mb-2 mt-2 hover:border-y-fuchsia-500 hover:shadow-lg hover:shadow-slate-600 hover:rounded-lg '>
            <Link to='/create'
                state={{ post }} className='cursor-pointer'>
                <h2 className='text-fuchsia-gradient text-lg font-semibold'>{post.title}</h2>
                <p className='text-sm opacity-90'>Date: 20/04/2081</p>
                <p className='max-h-24 overflow-hidden'>{post.blogContent}</p>
            </Link>
            <div className=' flex flex-row justify-between '>
                <div className='flex flex-row justify-start gap-x-3'>
                    <div>
                        {post.likes}<i className="fas fa-heart postBadge text-slate-gradient"></i>
                    </div>
                    <div className='mr-6'>
                        {post.comments.length}<i className="fa fa-comment postBadge text-slate-gradient hover:bg-transparent text-gray-600 cursor-default" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='flex flex-row gap-x-4'>
                    <div className='' onClick={deleteHandler}>
                        <i className="fa fa-trash  postBadge text-fuchsia-gradient" aria-hidden="true"></i>
                    </div>
                    <div className='' onClick={() => { window.open(`/preview/${post.id}`, "_blank") }}>
                        <i className="fa fa-eye postBadge text-fuchsia-gradient" aria-hidden="true"></i>
                    </div>
                    <Link to="/create" state={{ post }}>
                        <i className="fas fa-edit postBadge text-fuchsia-gradient"></i>
                    </Link>
                </div>

            </div>
        </div>
    )
});

export default Post;
//Things left
//1. either make post store in localstorage or backend
//2. work on comments part (make them count number appear in posts too)
//3. work on preview part
//4. work on responsiveness
//5. work on user profile