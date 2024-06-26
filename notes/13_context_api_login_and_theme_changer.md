
#### Context API(from Gemini)
The Context API in React plays a significant role in managing data across components. Here's a breakdown of its importance:

**Addressing Prop Drilling:**
- In traditional React applications, data is passed down from parent to child components using props. This can become cumbersome, especially for data required by components at many levels in the component hierarchy. This practice is called "prop drilling."
- Context API offers an alternative by providing a mechanism ==to share data across the entire component tree (or a designated part of it) without explicitly passing it down through every level.==

**Improved Code Organization:**
- By storing and managing data in the Context API, you can separate data fetching logic and state management from component logic. This leads to cleaner and more maintainable code.

**Global State Management (for specific use cases):**
- While not a replacement for complex state management libraries like Redux, Context API can be used effectively for managing application-wide or shared state that's needed by various components throughout your React app.

**Reduced Prop Drilling Overhead:**
- By eliminating the need to pass props down through multiple levels, Context API improves performance, especially in larger applications with many components.

**Flexibility in Data Sharing:**
- You can create multiple contexts for different parts of your application, allowing you to manage data at a granular level. This flexibility makes it suitable for various data sharing needs.

**Here are some key points to consider when using Context API:**
- **Overuse can make components less reusable:** 
	- While Context API is useful, excessive use can make components more tightly coupled to the context and less reusable in different parts of your application.
- **Potential for naming conflicts:** 
	- Be mindful of naming your contexts to avoid conflicts with other variable names in your components.

**In summary,** Context API is a valuable tool for managing data flow in React applications. It helps reduce prop drilling, improve code organization, and manage shared state effectively. However, it's essential to use it judiciously to maintain component reusability and avoid naming conflicts.

<hr>

There are other options available
- Redux
- react-redux
- redux-toolkit(RTK)
- zustand

<hr>

read about [useContext](https://react.dev/reference/react/useContext)



We need to create two file UserContext.js and UserContextProvider.jsx

children is a generic name used for props. 


<hr>

`components/Login.jsx`
```js
import React, { useContext, useState } from 'react';
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <>
            <h2> Login </h2>
            <input
                type="text"
                placeholder="username"
                onChange={ (e) => setUsername(e.target.value)}
            />
            {" "}
            <input
                type="text"
                placeholder="password"
                onChange={ (e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}> Submit </button>
        </>
    )
}

export default Login
```


`components/Profile.jsx`
```js
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return <div> Please login!! </div>
    return <div> Welcome {user.username} </div>
}

export default Profile;
```


`context/UserContext.js`
```js
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```


`context/UserContextProvider.jsx`
```js
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <>
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;
```

<hr>

In tailwind, light and dark options are available to enable and disable it. It is added in `<html>
 tag

`contexts/theme.js`
```js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
});

export const ThemeProvider = ThemeContext.Provider;

// custom hooks
export default function useTheme() {
    return useContext(ThemeContext);
}
```


`components/ThemeButton.jsx`
```js
import React from 'react';
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeButton = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) darkTheme()
        else lightTheme()
        
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeButton}
                checked={ themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}
```



`contexts/theme.js`
```js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
});

export const ThemeProvider = ThemeContext.Provider;

// custom hooks
export default function useTheme() {
    return useContext(ThemeContext);
}
```


`App.jsx`
```js
import { useEffect, useState } from 'react';
import Card from './components/Card';
import ThemeBtn from './components/ThemeButton';
import { ThemeProvider } from './contexts/theme';

function App() {
    const [themeMode, setThemeMode] = useState("light");
    
    const lightTheme = () => {
        setThemeMode("light");
    }

    const darkTheme = () => {
        setThemeMode("dark");
    }

    // actual change in theme
    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeProvider>

  )
}

export default App;
```


`tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}
```


**Note:** The method name given in the provider and App.jsx should match. It is kind of overloading.