React handles the update part even if there are multiple updates when you want to do something. This is done through **hooks**.

[source code](https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js)


we are going to use `useState` hook 
`import { useState } from 'react';`

`useState()` returns
- `counter` -> a variable; you can give any name
- `setCounter` -> a function; you can give any name
`let [counter, setCounter] = useState(0);`


```js
function App() {
    // let counter = 0;

    let [counter, setCounter] = useState(0); // 0 is initial value

    const addValue = () => {
        if (counter < 20) {
            counter += 1;
            setCounter(counter)
            console.log("clicked and increased the counter value ", counter);
        }
    }

    const removeValue = () => {
        if (counter > 0) {
            counter -= 1;
            setCounter(counter);
        }
    }

    return (
        <>
            <h1> Hello friend, Mr Robot!! </h1>
            <h2> Counter value: { counter}</h2>

            <button onClick={addValue}> Add value { counter } </button>
            <br />
            <br />
            <button onClick={removeValue}> Remove value { counter }  </button>
        </>
    )
}

export default App;
```


If you want to change the counter multiple times, you can do the following
```js
import { useState } from 'react'; // hook
import './App.css';

function App() {
    // let counter = 0;

    let [counter, setCounter] = useState(0); // 0 is initial value

    const addValue = () => {
        if (counter < 20) {
            setCounter(prevCounter => {
                console.log(`Updating counter ${prevCounter}`)
                return prevCounter + 1
            });
            setCounter(prevCounter => prevCounter + 1);
            setCounter(prevCounter => prevCounter + 1);
            setCounter(prevCounter => prevCounter + 1);
            setCounter(prevCounter => prevCounter + 1);
        }
    }
```

as you can see here, `setCounter()` take a callback function as parameter. Using which you can pass the previous value to the `setCounter()`.

So, when you click on the button, the value of the counter will be changed from 0 -> 5 -> 10 -> 15