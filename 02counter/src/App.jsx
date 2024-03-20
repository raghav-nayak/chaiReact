import { useState } from 'react'; // hook
import './App.css';

function App() {
    // let counter = 0;

    let [counter, setCounter] = useState(0); // 0 is initial value

    const addValue = () => {
        if (counter < 20) {
            // counter += 1;
            // setCounter(counter)
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
