import React, { useState } from 'react'

export default function Navbar({ getSearchText }) {
    const [searchText, setSearchText] = useState('');
    const handleSearchInput = (e) => {
        setSearchText(e.target.value);
        getSearchText(searchText);
    }
    const clearSearchText = () => {
        setSearchText('');
    }
    return (
        <nav className='bg-white flex justify-between pr-6 pl-6 pt-3 pb-3 border-b border-gray-300 items-center sticky top-0 z-20'>
            <div>
                <h2>BLOG<em className='not-italic font-bold text-fuchsia-500'>JOURNAL</em></h2>
            </div>
            <div className='bg-gray-400 pr-0 w-2/5 flex justify-between rounded-lg'>
                <div className='overflow-hidden bg-transparent w-full outline-none rounded-lg rounded-br-none rounded-tr-none flex justify-normal'>
                    <input className='p-1 pl-4 overflow-hidden bg-gray-200 w-full outline-none rounded-lg rounded-br-none rounded-tr-none focus:bg-gray-300 placeholder-gray-700' type="text" name="search" id="search" placeholder='Search posts but search bar currently not implemented' onChange={handleSearchInput} value={searchText} />{
                        searchText &&
                        <button className='bg-gray-300 p-1 pr-4 z-10' onClick={clearSearchText}>
                            <i className="fas fa-times"></i>
                        </button>
                    }
                </div>
                <button className='pl-4 pr-4 text-fuchsia-100'>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div>
                <img className='w-12 rounded-full border-2 hover:rotate-6 cursor-pointer' src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="pfp" />
            </div>
        </nav>
    )
}
