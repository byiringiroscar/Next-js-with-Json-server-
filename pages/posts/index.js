import Link from "next/link";

const PostList = ({ posts }) => {
    return (
        <>
            <h1>List of Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <Link href={`posts/${post.id}`} passHref>
                      <h3>{post.id}  {post.title}</h3>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default PostList;



export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props: { posts: data}
    }
}