import React from 'react';

const PostContainer = (pops) => {
    const {picture, coverImg, profilePic, name, registered, title, age} = pops.post
    console.log(coverImg, profilePic, name, registered, title, age)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
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
            <p>Reading Time :</p>
        </div>
    </div>
    <h2 className="card-title">{title}</h2>
    <div className="card-actions justify-start">
        <a className='text-blue-700 font-semibold' href="#">Mark as read</a>
    </div>
  </div>
</div>
    );
};

export default PostContainer;