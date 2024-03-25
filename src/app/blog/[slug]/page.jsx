import Image from "next/image"
import styles from "./singlePost.module.css"
import { getPost } from "@/lib/data";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

//FETCH DATA WITH AN API
// const getData = async (slug) => {

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   const data = await res.json();

//   return data;
// }


const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FECTH DATA WITH AN API
  // const post = await getData(parseInt(slug));

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug)

  return (
    <div className={styles.container}>
      {post.img &&
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={post.img}
            alt="" fill />
        </div>
      }

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && <Suspense fallback={<>Loading.. </>}>
            <PostUser userId={post.userId} />
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published: </span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;
