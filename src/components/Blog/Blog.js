import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='blog-container'>
                <div className="question">
                    <h2>How does react work?</h2>
                </div>
                <div className="answer">
                    <p>React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.</p>
                </div>
            </div>
            <div className="blog-container">
                <div className="question">
                    <h2>Difference between PROPS and STATE</h2>
                </div>
                <div className="answer">
                    <p>1. Props are used to passed data from one component to another.  In State The Data is passed within the component only.</p>
                    <p>2. Props are Immutable (cannot be modified) but State is mutable</p>
                    <p>3. Props can be used with state and functional components.State can be used only with the state components/class component</p>
                    <p>4. Props are read-only.State is both read and write.</p>
                </div>
            </div>
            <div className='blog-container'>
                <div className="question">
                    <h2>What does useEffect do without data loading?</h2>
                </div>
                <div className="answer">
                    <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;