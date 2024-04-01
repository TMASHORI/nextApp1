"use server"
import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth"

const Navbar =  async() => {

  const session = await auth() || false

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Lama</Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar