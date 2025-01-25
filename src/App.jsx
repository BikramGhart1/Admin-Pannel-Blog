import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar';

function App() {

  const [searchText, setSearchText] = useState('');
  const getSearchText = (searchTextFromNav) => {
    setSearchText(searchTextFromNav);
  }
  return (
    <>
      <Navbar getSearchText={getSearchText} />
      <div className='flex flex-row'>
        <Sidebar />
        <Dashboard searchText={searchText} />
      </div>

    </>
  )
}

export default App
