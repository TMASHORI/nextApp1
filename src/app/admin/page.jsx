
import { Suspense } from "react"
import styles from "./admin.module.css"
import AdminPosts from "@/components/adminPosts/adminPosts"
import AdminUsers from "@/components/adminUsers/adminUsers"
import AdminUserForm from "@/components/adminUserForm/adminUserForm"
import AdminPostForm from "@/components/adminPostForm/adminPostForm"
import { auth } from "@/lib/auth"

const Page = async () => {

  const session = await auth()
  
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading....</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading....</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  )
}

export default Page
