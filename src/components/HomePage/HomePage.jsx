import React, { useEffect, useState } from 'react';
import PostContainer from '../PostContainer/PostContainer';
import Sidebar from '../SideBar/Sidebar';

const HomePage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 m-5'>
            <div className='col-span-2'>
            {
                posts.map(post => <PostContainer
                key={post.id}
                post={post}
                ></PostContainer>)
            }
            </div>
            <div>
            <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default HomePage;