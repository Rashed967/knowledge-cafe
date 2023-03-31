import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Sidebar = (props) => {
    const bookmarks = props.bookmark
    const totalReadingTime = props.totalReadingTime

    return (
        <div className='p-5 sticky'>
            <div className='m-4 p-4  bg-info text-center rounded-md text-white'>
                <p>Spent time on read : {totalReadingTime} min</p>
            </div>
            <div className='bg-slate-300 p-4 rounded-md'>
                <h2>Bookmarked Blogs : {bookmarks.length ? bookmarks.length : 0}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Sidebar;