import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-10">
      <div className="tracking-widest text-lg leading-8.5">
          <Link to="/">NOIRÉA</Link>
        </div>
      <h1 className="heading-1">This content does not exist.</h1>

      <Link
          to="/"
          className="bg-white px-5 py-3 rounded-full text-dark font-medium uppercase"
        >
          back to home
        </Link>
    </div>
  )
}

export default NotFound