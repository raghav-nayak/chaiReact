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
