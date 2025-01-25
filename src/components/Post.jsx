import React from 'react'

export default function Post() {
    return (
        <div className='p-2 border border-solid border-gray-500 mb-2 mt-2 hover:border-x-fuchsia-500 hover:shadow-lg hover:shadow-slate-600 hover:rounded-lg cursor-pointer'>
            <div>
                <h2>Title</h2>
            </div>
            <div>
                <em>Date: 20/04/2081</em>
                <p>Description</p>
            </div>
        </div>
    )
}
