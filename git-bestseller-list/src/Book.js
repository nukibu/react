import React from 'react'

export const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick onMouseOver

  return (
    <article className = 'book'>
      <div className = 'image-container'>
        <img src={img} alt="" />
      </div>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}
