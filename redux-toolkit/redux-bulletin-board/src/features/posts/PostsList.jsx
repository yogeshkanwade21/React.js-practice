import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </article>
    ));

    return (
        <section>
            {renderPosts}
        </section>
    )
}

export default PostsList;