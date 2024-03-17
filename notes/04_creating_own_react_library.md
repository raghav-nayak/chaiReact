rendering an element means adding the element to root DOM element.

React continuously creates elements like we do it in custom react.

```js
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop == "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}
```

React uses a bundler e.g. babel. It handles the injecting and converting the HTML to JSX.

Instead of returning `<App />`, we can directly return `App()` but not advisable.

ReactDOM `render()` expects a function or a reactElement.

Creating our own React element.
```js
const reactElement = React.createElement(
    "a", // type of element
    {
        href: "https://google.com",
        target: "_blank"
    },
    "click me to visit google from custom react element"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
```


### JSX - using variables within hTML in react
If you want to use the value of variable within a tag, use `{variable_name}`.

You cannot evaluate an expression within `{}`. It should be an evaluated expression.

```js
function App() {
    const userName = "Mr. Robot";
    return (
        <>
            <MyApp />
            <h1> hello friend, {userName} </h1>
        </>
    )
}
```

```js
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
    reactElement
)
```

We can make use of the this package to transform the HTML element to JSX.
`import { jsx as _jsx} from "react/package.json";`

React source code: https://github.com/facebook/react