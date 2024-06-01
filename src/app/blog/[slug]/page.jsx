import Image from "next/image"
import styles from "./singlePost.module.css"
import { getPost } from "@/lib/data";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

//FETCH DATA WITH AN API
const getData = async (slug) => {

  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    console.log(Error.message)
    throw new Error("Failed to fetch")
  }

  const data = await res.json();

  return data;
}


const SinglePostPage = async ({ params }) => {

  const { slug } = params

  // FECTH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  //  const post = await getPost(slug)

  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={post.img}
          alt="" fill />
      </div>


      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {<Suspense fallback={<>Loading.. </>}>
            <PostUser userId={post.userId} />
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published: </span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(0, 10)} */}
              {new Date().toString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;
