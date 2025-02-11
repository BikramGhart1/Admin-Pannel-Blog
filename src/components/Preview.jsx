import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addComment } from '../slices/postSlice';
import { v4 as uuidv4 } from 'uuid';

const Preview = React.memo(() => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [post, setPost] = useState({
    title: '',
    blogContent: '',
    comments: [],
  });
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const foundPost = storedPosts.find((p) => p.id === id);
    setPost(foundPost);

  }, [id])

  if (post && post.title) {
    document.title = `Preview - ${post.title}`;
  } else {
    document.title = `Post not found - BlogJournal`;
  }

  if (!post) {
    return <div className='text-center pt-60'>
      <Link to='/' className='pb-5 cursor-pointer'>BLOG<em className='not-italic text-fuchsia-gradient'>JOURNAL</em></Link>
      <h2 className=' font-semibold text-lg'>Post not found, Hehee..</h2>
    </div>
  }

  const commentOnChangeHandle = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setComment(value);
  }

  const submitComment = (e) => {
    e.preventDefault();
    dispatch(addComment({ id: post.id, commentId: uuidv4(), commentContent: comment }));
    setComment('');
    console.log(post);
  }

  return (
    <div className='mr-2 ml-2 md:p-5 p-2 border-l-2 border-fuchsia-600 min-h-svh text-sm md:text-lg'>
      <div className=''>
        <Link to='/' className=''>BLOG<em className='not-italic text-fuchsia-gradient'>JOURNAL</em></Link>
        <h2 className='text-center p-4 mb-3 font-semibold border-b bg-neutral-300 text-fuchsia-600 text-xl'>{post.title}</h2>

        <div className='border-b border-r border-l rounded-lg border-gray-400 p-5 pb-6'>
          <p>{post.blogContent}</p>
        </div>
      </div>
      <div className='mt-8 w-4/5 m-auto'>
        <div className='w-full '>
          <div className='border-b border-neutral-400 mb-5 pb-1 flex flex-row justify-between '>
            <p >3 Comments</p>
            <p>Login</p>
          </div>
          <form onSubmit={submitComment}>
            <label htmlFor="comment">Join the discussion</label>
            <textarea name="comment" id="comment" value={comment} onChange={commentOnChangeHandle} className='min-h-12 w-full border border-fuchsia-400 outline-none p-2'>

            </textarea>
            {comment.length > 0 &&
              <input type='submit' value='Comment' className='bg-gradient-to-r from-fuchsia-400 to-fuchsia-800 text-white p-2 pr-3 pl-3 rounded-md cursor-pointer' />
            }
          </form>
        </div>
        <div>
          <div className='flex flex-row justify-start gap-x-8 pt-10'>
            <div className='md:max-w-20 max-w-10 flex-shrink-0'>
              <img src="https://c.disquscdn.com/uploads/users/39596/4769/avatar92.jpg?1688811803" className='rounded-full' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold'>HariYadav</p>
              <p className='text-sm'>2 years ago</p>
              <p className='pt-2'>Tf u doin here old zaratul</p>
            </div>
          </div>
          <div className='flex flex-row justify-start gap-x-8 pt-10'>
            <div className='md:max-w-20 max-w-10 flex-shrink-0'>
              <img src="https://c.disquscdn.com/uploads/users/35966/8923/avatar92.jpg?1723087776" className='rounded-full' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold'>Hans Bull</p>
              <p className='text-sm'>a year ago</p>
              <p className='pt-2'>This is the 1st chapter, and I'm already confused with the comments</p>
            </div>
          </div>
          {
            post.comments.length > 0 &&
            post.comments.map((comment, index) => {
              return <div key={comment.commentId || index} className='flex flex-row justify-start gap-x-8 pt-10'>
                <div className='md:max-w-20 max-w-10 flex-shrink-0'>
                  <img src="https://c.disquscdn.com/uploads/users/35966/8923/avatar92.jpg?1723087776" className='rounded-full' alt="" />
                </div>
                <div className='flex flex-col'>
                  <p className='font-semibold'>Guest</p>
                  <p className='text-sm'>a year ago</p>
                  <p className='pt-2'>{comment.content}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
})

export default Preview;