import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';

const Comment = React.memo(({ comment }) => {
    return <div key={comment.commentId} className='flex flex-row gap-x-24 pt-5'>
        <div className='min-w-16 rounded-full overflow-hidden'>
            <img src="https://c.disquscdn.com/uploads/users/35966/8923/avatar92.jpg?1723087776" alt="" />
        </div>
        <div className='flex flex-col justify-start'>
            <h2><em className='not-italic font-semibold'>Guest</em> Commented on <em className='not-italic font-semibold'>{comment.title}</em></h2>
            <p className='text-fuchsia-gradient'>{comment.content}</p>
            <p className='text-sm'>{comment.date}</p>
        </div>

    </div>
})

function Comments() {
    const posts = useSelector((state) => state.posts.posts);
    const allComments = useMemo(() =>
        posts.flatMap((post) =>
            post.comments.map((comment) => ({
                ...comment,
                commentId: comment.commentId,
                id: post.id,
                title: post.title,
                date: post.date,
            })))
        , [posts]);
    console.log(allComments);
    return (
        <main className='bg-gray-0 flex-1 overflow-y-auto p-10'>
            <div className='pb-10'>
                <select className='text-gray-800 rounded-lg outline-none p-1 border-none'>
                    <option value="all">All</option>
                    <option value="published">Published</option>
                    <option value="draft">Awaiting Moderation</option>
                </select>
            </div>
            {
                allComments.length > 0 ?
                    (allComments.map((comment) => {
                        return <Comment comment={comment} />
                    })) : (
                        <p className='pt-40  text-lg text-center'>No comments available.</p>

                    )
            }
        </main>
    )
}
export default React.memo(Comments);

//Things left to do
//1. Make comments delete edit and reply
//2. dynamic comment counts
//3. form validation
//4. testing
//5. obv backend
//6. post and comment date updation like one hour ago
//7. give users temporary name to comment
//8. moderation tools
//9. sorting 