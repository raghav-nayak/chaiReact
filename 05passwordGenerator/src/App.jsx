import { useCallback, useEffect, useRef, useState } from 'react';


function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [splCharAllowed, setSplCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    // useRef hook
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
        if (numberAllowed) allowedChars += "0123456789";
        if (splCharAllowed) allowedChars += "!@#$%^&*()_+-={}[]|:;<>";
        let generatedPassword = "";

        for (let i = 1; i <= length; i++) {
            let charPosition = Math.floor(Math.random() * allowedChars.length + 1);
            generatedPassword  += allowedChars.charAt(charPosition)
        }
        setPassword(generatedPassword)
    }, [length, numberAllowed, splCharAllowed, setPassword]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select(); // to display the selected text
        passwordRef.current?.setSelectionRange(0, password.length); // display the selected text with range
        window.navigator.clipboard.writeText(password); // copy the password to clipboard
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, splCharAllowed, passwordGenerator]);

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-6 text-orange-500 bg-gray-800">
                <h1 className="text-white text-center my-1"> Password Generator </h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4 py-3">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py- px-3 rounded-lg"
                        placeholder="password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className="outline-none bg-blue-700 text-white px-3 py-05 shrink-0 rounded-lg">
                        copy
                    </button>
                </div>
                
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={6}
                            max={30}
                            className="cursor-pointer"
                            onChange={ (event) => {setLength(event.target.value)}}
                        />
                        <label> Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={ () => {setNumberAllowed((prevVal) => !prevVal)}} /* to flip the value from true to false */
                        />
                        <label htmlFor="numberInput"> Numbers </label>  
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={splCharAllowed}
                            id="splCharacterInput"
                            onChange={ () => {setSplCharAllowed((prevVal) => !prevVal)}} /* to flip the value from true to false */
                        />
                        <label htmlFor="numberInput"> Spl Characters </label>  
                    </div>  
                </div>
            </div>
        </>
    )
}

export default App
