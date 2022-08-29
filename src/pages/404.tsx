import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Some header */}
      <div className="flex flex-grow items-center justify-center">
        <div className="text-center">
          <p className="font-bold text-3xl">404</p>
          <Link className="hover:text-blue-600" to={'/'}>Go back</Link>
        </div>
      </div>
      {/* Some footer */}
    </div>
  )
}

export default NotFoundPage
