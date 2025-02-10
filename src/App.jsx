import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Comments from './components/Comments';
import CreatePost from './components/CreatePost';
import Preview from './components/Preview';


function App() {
  const [searchText, setSearchText] = useState('');

  const getSearchText = (searchTextFromNav) => {
    setSearchText(searchTextFromNav);
  }
  return (
    <>
      <Navbar getSearchText={getSearchText}  />
      <div className='flex flex-row'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/create' element={<CreatePost />} />
        </Routes>
      </div>

    </>
  )
}

export default App
