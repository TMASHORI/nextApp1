import styles from "./blog.module.css"
import PostCard from "@/components/postCard/PostCard"
import { getPosts } from "@/lib/data"

export const metadata = {
  title: "Blog Page",
  description: "Next.js starter app description",
};

// FECTH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600},cache:'no-store'},);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return data;
}





const Page = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  // FECTH DATA WITHOUT AN API
  // const posts = await getPosts()
  
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        )

      })}
    </div>
  )
}

export default Page;
