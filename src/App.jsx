import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar';
import { Route, Router, Routes } from 'react-router-dom';
import Comments from './components/Comments';
import CreatePost from './components/CreatePost';


function App() {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getSearchText = (searchTextFromNav) => {
    setSearchText(searchTextFromNav);
  }

  const getPosts = (postsFromCreate) => {
    const postIndex = posts.findIndex((p) => p.id === postsFromCreate.id);
    if (postIndex !== -1) {
      const updatedPosts = [...posts];
      updatedPosts[postIndex] = postsFromCreate;
      setPosts(updatedPosts);
    } else {

      setPosts((prev) => [...prev, postsFromCreate]);
    }
    console.log(posts)
  }

  return (
    <>
      <Navbar getSearchText={getSearchText} />
      <div className='flex flex-row'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard posts={posts} />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/create' element={<CreatePost getPosts={getPosts} />} />
        </Routes>
      </div>

    </>
  )
}

export default App
