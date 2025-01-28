import React from 'react'

export default function Post() {
    return (
        <div className='p-2 border border-solid border-gray-400 relative rounded-lg mb-2 mt-2 hover:border-y-fuchsia-500 hover:shadow-lg hover:shadow-slate-600 hover:rounded-lg cursor-pointer'>
            <div>
                <h2>Title</h2>
                <em>Date: 20/04/2081</em>
                <p>Description</p>
            </div>
            <div>
                <div className='mr-6 p-2 '>
                    <i class="fa fa-trash rounded-full p-2 hover:bg-gray-300 absolute bottom-2 right-2" aria-hidden="true"></i>
                </div>
                <div className='mr-6 p-2 '>
                    <i className="fa fa-eye rounded-full p-2 hover:bg-gray-300 absolute bottom-2 right-12" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}
