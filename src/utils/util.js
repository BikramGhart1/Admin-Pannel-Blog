export const calcuateTotalLikes = (posts) => {
    return posts.reduce((acc, post) => acc + post.likes, 0);
}