import { handleGithubLogin } from "@/lib/action"

const Page = async () => {

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  )
}

export default Page
