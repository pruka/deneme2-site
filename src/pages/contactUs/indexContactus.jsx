import React from 'react'

function ContactUs({ children, title="title", ...props }) {
  return (
    <div className='text-center text-2xl font-bold underline uppercase'>{title}</div>
  )
}

export default ContactUs