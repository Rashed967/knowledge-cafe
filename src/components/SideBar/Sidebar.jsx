import React from 'react';

const Sidebar = () => {
    return (
        <div className='p-5'>
            <div className='m-4 p-4  bg-info text-center rounded-md text-white'>
                <p>Time spent on reading</p>
            </div>
            <div className='bg-slate-300 p-4 rounded-md'>
                <h2>Bookmarked Blogs : 8</h2>
                <div className='my-4 p-4 font-medium bg-secondary rounded-md text-white'>
                    <h2>Master Microsoft Power Platform and Become an In-Demand!</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;