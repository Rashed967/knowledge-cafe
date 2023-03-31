import React, { useEffect, useState } from 'react';
import PostContainer from '../PostContainer/PostContainer';
import Sidebar from '../SideBar/Sidebar';

const HomePage = () => {
    const [posts, setPosts] = useState([])
    const [bookmark, setBookmark] = useState([])
    const [markAsRead, setMarkAsRead] = useState([])
    const [totalReadingTime, setTotalReadingTime] = useState(0)

    

    const addToBookmark = (post) => {
        const newBookmark = [...bookmark, post]
        setBookmark(newBookmark)
    }

    const addMarkAsRead = post =>{
        const newMarkAsRead = [...markAsRead, post]
        setMarkAsRead(newMarkAsRead)
        const sum = newMarkAsRead.reduce(
            (accumulator, currentValue) => accumulator + currentValue.readingTime,
            0,
          );
          setTotalReadingTime(sum)
    } 


    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 m-5 '>
            <div className='col-span-2'>
            {
                posts.map(post => <PostContainer
                key={post.id}
                post={post}
                addToBookmark={addToBookmark}
                addMarkAsRead={addMarkAsRead}
                
                ></PostContainer>)
            }
            </div>
            <div>
            <Sidebar
            bookmark={bookmark}
            totalReadingTime = {totalReadingTime}
            ></Sidebar>
            </div>
        </div>
    );
};

export default HomePage;