import Link from 'next/link'
import React from 'react'

const Notfound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry this page does not exist</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default Notfound
