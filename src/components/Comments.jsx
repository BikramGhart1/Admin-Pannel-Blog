import React from 'react'
const commentDetails = [{
    user: "Ram",
    comment: "This shi is fire",
    post: "Chapter 1: Vanishing",
    publishedDate: new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: "numeric",
    }),
},
{
    user: "HariTarnished",
    comment: "I fw this",
    post: "My secret fantasies",
    publishedDate: new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: "numeric",
    }),
},
{
    user: "oGTarnished",
    comment: "I want more of this",
    post: "K drama inspired novel",
    publishedDate: new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: "numeric",
    }),
},
]

function Comments() {

    return (
        <main className='bg-gray-0 flex-1 overflow-y-auto pb-96 p-10'>
            <div>
                <select name="postCategory" id="postCategory" className='text-gray-800 rounded-lg outline-none p-1 border-none'>
                    <option value="all">All</option>
                    <option value="published">Published</option>
                    <option value="draft">Awaiting Moderation</option>
                </select>
            </div>
            {commentDetails.map((commentt, index) => {
                return <div key={index} className='border border-solid border-gray-400 p-1 pl-3 mt-3 mb-3 flex flex-row justify-start gap-x-20 cursor-pointer rounded-lg relative hover:shadow-lg hover:border-y-fuchsia-500 hover:shadow-slate-500'>
                    <div>PFP</div>
                    <div className='flex-1'>
                        <p>{`${commentt.user} commented on ${commentt.post}`}</p>
                        <p>{`${commentt.comment}`}</p>
                        <p>{`${commentt.publishedDate}`}</p>
                    </div>
                    <div className='mr-6 p-2 '>
                        <i class="fa fa-trash rounded-full p-2 hover:bg-gray-300 absolute bottom-2 right-2" aria-hidden="true"></i>
                    </div>
                </div>
            })}
        </main>
    )
}
export default React.memo(Comments);