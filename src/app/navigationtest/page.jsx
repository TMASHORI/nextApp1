"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")



    const handleClick = ()=>{
        console.log("clicked")
        router.push("/")
    }

    return (
        <div>
            <div>
                <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
            </div>
        </div>
    )
}

export default NavigationTestPage
