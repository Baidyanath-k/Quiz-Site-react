import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className="react-router">
                <h2>What is the purpose of React Router?</h2>
                <p> <span>Ans:</span> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className="api">
                <h2>How does context API works?</h2>
                <p> <span>Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className="hook">
                <h2>Tell me something about useRef() Hook</h2>
                <p><span>Ans:</span> In this post we’ll cover what the useRef Hook is, what we can use it for and some advice for using it.The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blog;