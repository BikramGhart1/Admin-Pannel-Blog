import React, { useState } from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'
import Preview from './Preview';
import { Link } from 'react-router-dom';


export default function Dashboard() {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <main className='bg-gray-0 flex-1 overflow-y-auto pb-96 p-10'>
      <div className='flex flex-row md:gap-x-20 gap-x-5'>
        <select name="postCategory" id="postCategory" className='text-gray-800 rounded-lg outline-none p-1 border border-neutral-500'>
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">draft</option>
        </select>
        <Link to="/create" className='bg-gradient-to-r from-fuchsia-400 to-fuchsia-900 text-white flex flex-row gap-x-3 items-center pl-3 pr-3 rounded-md'>
          <i className="fa fa-plus" aria-hidden="true"></i>
          CREATE
        </Link>
      </div>
      <div className='flex flex-col mt-4'>
        {
          posts.length > 0 ?
          (posts.map((post, index) => {
            return <Post key={post.id || index} post={post} />
          })):
          (
            <p className='m-auto pt-40  text-lg'>No posts available.
            </p>
          )
        }
      </div>
    </main>
  )
}
