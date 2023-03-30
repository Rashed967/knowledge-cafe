import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
       <>
        <div className='p-4 my-4 bg-blue-300 rounded-md font-semibold'>
            <p >{title}</p>
        </div>
       </>
    );
};

export default Bookmark;