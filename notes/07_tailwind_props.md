https://tailwindcss.com/

This will automatically generate the CSS for us based on the class we use in the JSX.

Use the steps given in the https://tailwindcss.com/docs/guides/vite
```sh
$ npm install -D tailwindcss postcss autoprefixer

added 84 packages, and audited 364 packages in 13s

126 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ npx tailwindcss init -p

Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
```

instead of `class` we write `className`

`<h1 className="bg-green-400 text-black p-4 rounded-xl"> Tailwind test </h1>`

bg-green-400 -> background green
text-black -> text color is black
p-4 -> padding
rounded-xl -> rounded layout

For different UI components, you can refer
https://www.devui.io/components

### properties(props)
`props` makes a component reusable.

each function in React has access to `props`

`<Card userName="Mr. Robot" />`
here `userName="Mr. Robot"` is props.

You can pass the props like this also
```js
let myObj={ name: "Mr. Robot"};
let myArr = [1, 2, 4];
<Card userName="Mr. Robot" someObj={myObj} someArr={myArr} />
```

```js
function Card(props) {
    console.log("props=", props)
    console.log("userName=", props.userName)
    return ( ... );
```

you can also destructure the object
```js
function Card({userName}) {
    console.log("userName=", userName)
    return ( ... );
```

Card.jsx
```js
function Card(props) {
    console.log("props=", props)

    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white"> {props.userName} </h1>
                <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {props.buttonTxt || "View Profile →"}
                </button>
            </div>
        </div>
    )
}

export default Card;
```

you can also write
```js
function Card({userName, buttonTxt="Visit me ->"}) {
...
}
```



App.jsx
```js
import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObj={ name: "Mr. Robot"};
  let myArr = [1, 2, 4];
  return (
    <>
          <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4"> Tailwind test </h1>
          <Card userName="Mr. Robot" someObj={myObj} someArr={myArr} />
          <Card userName="Mr. Anderson" buttonTxt="click me ->"/>
    </>
  )
}

export default App
```