import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { SelectAllPosts } from "./postsSlice";
const PostsList = () => {
    const posts = useSelector(SelectAllPosts)

    const renderedPosts = posts.map(post =>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                 <PostAuthor userId={post.userId}/>
            </p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )

}

export default PostsList