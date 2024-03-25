import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, dicta voluptatum! Sed amet itaque commodi quas ut explicabo et natus!</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands image" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image  src="/hero.gif" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
