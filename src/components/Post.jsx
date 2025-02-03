import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../slices/postSlice';

const Post = React.memo(({ post }) => {
    const dispatch=useDispatch();
    const deleteHandler=()=>{
      dispatch(deletePost(post));
    }
    return (
        <div
            className='p-2 border border-solid border-gray-400 relative max-h-48 flex flex-col rounded-lg mb-2 mt-2 hover:border-y-fuchsia-500 hover:shadow-lg hover:shadow-slate-600 hover:rounded-lg '>
            <Link to='/create'
                state={{ post }} className='cursor-pointer'>
                <h2>{post.title}</h2>
                <em>Date: 20/04/2081</em>
                <p className='max-h-24 overflow-hidden'>{post.blogContent}</p>
            </Link>
            <div className=' flex flex-row justify-end '>

                <div className='mr-6'>
                    (3)<i className="fa fa-comment postBadge hover:bg-transparent text-gray-600 cursor-default" aria-hidden="true"></i>
                </div>
                <div className='' onClick={deleteHandler}>
                    <i className="fa fa-trash  postBadge " aria-hidden="true"></i>
                </div>
                <div className=''>
                    <i className="fa fa-eye postBadge" aria-hidden="true"></i>
                </div>
                <Link to="/create" state={{post}}>
                <i className="fas fa-edit postBadge"></i>
                </Link>
            </div>
        </div>
    )
});

export default Post;