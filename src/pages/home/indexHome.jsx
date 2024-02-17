import React from 'react'

function Home({ children, title="title", ...props }) {
  return (
    <div className='text-center font-bold text-2xl underline uppercase'>{title}</div>
  )
}

export default Home