import React from 'react';
import ReactDOM from 'react-dom/client';

const anotherElement = (
    <a href="https://google.com/" target="_blank">Visit google</a>
)

const anotherUser = "Elliot";

const reactElement = React.createElement(
    "a", // type of element
    {
        href: "https://google.com",
        target: "_blank"
    },
    "click me to visit google from custom react element",
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
    //   <React.StrictMode>
    //     <App />
    //   </React.StrictMode>,
    // anotherElement
    reactElement
    // <App />
)
