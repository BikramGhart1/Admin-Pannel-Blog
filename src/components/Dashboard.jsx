import React from 'react'
import Post from './Post'

export default function Dashboard({ searchText }) {

  return (
    <main className='bg-gray-100 flex-1 overflow-y-auto pb-96 p-10'>
      <div>
        <select name="postCategory" id="postCategory" className='text-gray-800 rounded-lg outline-none p-1 border-none'>
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">draft</option>
        </select>
      </div>
      <div className='flex flex-col mt-4'>
        <Post />
        <Post />
        <Post/>
        <Post/>
      </div>
    </main>
  )
}
