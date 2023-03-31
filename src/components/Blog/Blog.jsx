import React from 'react';

const Blog = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-center text-3xl font-semibold'>blog section</h1>
            <section >
                <div className='space-y-3'>
                <h2 className='text-xl font-semibold '>Props Vs State</h2>
                <p className='font-medium'>props is short form of proprerties, with props we can send any javascript function, array, object, method to the child component from parent component, But porps are immutable, It means prps cannot be changed.</p>
                
                <p className='font-medium'>On the other hand, states are used for changing UI by user click, and etc, state change data with lot of situation. like data load, network respons.</p>
                </div>

                <div className='space-y-3 my-4'>
                <h2 className='text-xl font-semibold '>How does state work?</h2>
                <p className='font-medium'>useState is React hook, it's used to manage state in a functional component and allows us to add state to our component, and to update that state when necessary.</p>
                </div>
                

                <div className='space-y-3 my-4'>
                <h2 className='text-xl font-semibold '>Purpose of useEffect other than fetching data</h2>
                <p className='font-medium'>fetching data is a common use case for `useEffect` there are many other reasons to use it in your React components. </p>
                <ol className='space-y-3'>
                    <li>Updating the document title</li>
                    <li>Subscribing to events</li>
                    <li>Managing animations</li>
                    <li>Managing timers or intervals</li>
                </ol>
                </div>

                <div className='space-y-3'>
                <h2 className='text-xl font-semibold '>How Does React work?</h2>
                <h2>Here's a overview of how React works:</h2>
                <ul className='space-y-3'>
                    <li>React components are written in JavaScript and JSX.</li>
                    <li>When component is rendered, React creates a virtual representation of the DOM called the virtual DOM.</li>
                    <li>React compares the new virtual DOM tree with the previous one to determine the minimal set of changes required to update the actual DOM.</li>
                    <li>React updates the actual DOM to reflect the changes made in your components.</li>
                    <li>Any time your component's state or props change, React re-renders the component and updates the virtual DOM, starting the process again.</li>
                </ul>
                </div>


            </section>
        </div>
    );
};

export default Blog;