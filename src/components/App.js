import { useState, useEffect } from "react";
import AppRouter from "components/Router";
import authService from "fbase";
import { getAuth } from "firebase/auth";

function App() {
    const auth = getAuth();
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(user);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        }, []);
    });

    return (
        <div>
            {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing..."}
            <footer>&copy; {new Date().getFullYear()}</footer>
        </div>
    );
}

export default App;
