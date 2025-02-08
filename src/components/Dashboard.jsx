import React, { useState } from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'
import Preview from './Preview';


export default function Dashboard() {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <main className='bg-gray-0 flex-1 overflow-y-auto pb-96 p-10'>
      <div>
        <select name="postCategory" id="postCategory" className='text-gray-800 rounded-lg outline-none p-1 border-none'>
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">draft</option>
        </select>
      </div>
      <div className='flex flex-col mt-4'>
        {
          posts.length > 0 &&
          posts.map((post, index) => {
            return <Post key={post.id || index} post={post} />
          })
        }
      </div>
    </main>
  )
}
