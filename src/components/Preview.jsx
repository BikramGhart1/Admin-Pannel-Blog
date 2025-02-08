import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Preview = React.memo(() => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: 'Title',
    blogContent: 'Blog content',
  });
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    console.log(storedPosts);
    const foundPost = storedPosts.find((p) => p.id === id);
    setPost(foundPost);
    if (foundPost) {
      document.title = `Preview - ${post.title}`;
    } else {
      document.title = `Post not found - BlogJournal`;
    }
  }, [id])

  if (!post) {
    return <h2>Post not found</h2>
  }
  return (
    <div className='mr-2 ml-2 p-5 border-l-2 border-fuchsia-600 min-h-svh'>
      <div className=''>
          <h2 className=''>BLOG<em className='not-italic font-bold text-fuchsia-500'>JOURNAL</em></h2>
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
            <label htmlFor="comment">Join the discussion</label>
          <textarea name="comment" id="comment" className='w-full border border-fuchsia-400 outline-none p-2'></textarea>
        </div>
        <div>
          <div className='flex flex-row justify-start gap-x-8 pt-10'>
            <div className='min-w-20 flex-shrink-0'>
            <img src="https://c.disquscdn.com/uploads/users/39596/4769/avatar92.jpg?1688811803" className='rounded-full' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold'>HariYadav</p> 
              <p className='text-sm'>2 years ago</p>
              <p className='pt-2'>Tf u doin here old zaratul</p>
            </div>
          </div>
          <div className='flex flex-row justify-start gap-x-8 pt-10'>
            <div className='min-w-20 flex-shrink-0'>
            <img src="https://c.disquscdn.com/uploads/users/35966/8923/avatar92.jpg?1723087776" className='rounded-full' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold'>Hans Bull</p> 
              <p className='text-sm'>a year ago</p>
              <p className='pt-2'>This is the 1st chapter, and I'm already confused with the comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Preview;