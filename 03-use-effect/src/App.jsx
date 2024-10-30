import {useEffect, useState} from "react";

function App() {

    const [showMessage, setShowMessage] = useState(false)

    const toggleMessage = () => {
        setShowMessage(!showMessage)
    };

    useEffect(() => {
        document.title = showMessage ? 'Message is showing' : 'Message is hidden';
    }, [showMessage]);

    return (
        <>
            <h1>
                Using the useEffect hook
            </h1>
            <button onClick={toggleMessage}>
                Toggle message
            </button>
            {showMessage && <h2>This is a message!</h2>}
        </>
    )
}

export default App
