import Image from "next/image"
import styles from "./postcard.module.css"
import Link from "next/link"

const postCard = ({ post }) => {

  console.log(post)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={post.img} alt=" " className={styles.img} fill/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`} >READ MORE</Link>
      </div>
    </div>
  )
}

export default postCard
