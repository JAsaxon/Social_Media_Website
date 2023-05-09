import React from 'react'
import "./-postform.scss"
import { AiOutlineSend } from "react-icons/ai"
export default function PostForm() {
  function handleSubmit(e:any) {
    e.preventDefault()
    console.log(23)
  }
  return (
    <div className="postForm">
      <form onSubmit={(e) => handleSubmit(e)}><input type="text" placeholder='Write anything...' /></form>
      <div className="submit" onClick={(e) => handleSubmit(e)}><AiOutlineSend /></div>
    </div>
  )
}
