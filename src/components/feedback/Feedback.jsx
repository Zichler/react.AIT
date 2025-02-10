import React, { useState } from 'react'
import MyButton from './MyButton'
import "./feedback.css"

export default function Feedback() {

const [likes, setLikes] = useState(0);
const [dislikes, setDislikes] = useState(0);

const handleLike = () => {
    setLikes(count => count +1)
};
const handleDislike = () => {
    setDislikes(count => count -1)
};
const handleReset = () => {
    setLikes(0);
    setDislikes(0);
};

  return (
    <div className='container'>
        <span className='count'>{likes}</span>
      <MyButton func={handleLike} text={"Like"}/>
      <MyButton func={handleDislike} text={"Dislike"}/>
      <span className='count'>{dislikes}</span>
      <MyButton func={handleReset} text={"Reset Results"}/>
      
    </div>
  )
}
