import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'


const PostContainer = (props) => {
    const {picture, coverImg, profilePic, name, registered, title, age, readingTime} = props.post
    const addToBookmark =  props.addToBookmark
    const addMarkAsRead = props.addMarkAsRead
    return (
        <div className="card card-compact bg-base-100 shadow-xl my-4">
  <figure><img className='w-full rounded-md' src={coverImg} alt="Shoes" /></figure>
  <div className="card-body">
    <div className='flex justify-between'>
        <div className='flex gap-4'>
            <img className='rounded-full w-12' src={profilePic} alt="" />
            <div>
                <p>{name} </p>
                <p>{registered}</p>
            </div>
        </div>
        <div>
            <p>Reading Time : {readingTime} min
                <span onClick={() => addToBookmark(props.post)} className='ml-2 cursor-pointer'><FontAwesomeIcon icon={faBookBookmark} /></span>
            </p>
        </div>
    </div>
    <h2 className="card-title">{title}</h2>
    <div className="card-actions justify-start">
        <a onClick={() => addMarkAsRead(props.post)} className='text-blue-700 font-semibold' href="#">Mark as read</a>
    </div>
  </div>
</div>
    );
};

export default PostContainer;