import React, {useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState(0);
    const [sessionValue, setSessionValue] = useState(0);

    const incHandler = () => {
        setValue(value + 1);
        setSessionValue(sessionValue + value * 2);
        sessionStorage.setItem('sessionValue', JSON.stringify(sessionValue))
    };

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value));
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    };

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            setValue(newValue)
        }
    };

    const clearLocalStorageHandler = () => {
        localStorage.clear();
        setValue(0)
    };

    const removeFromLocalStorageHandler = () => {
        localStorage.removeItem('counterValue + 1')
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>{value}</h1>
                <h3>Обнуляется при закрытии вкладки: {sessionValue}</h3>
                <div>
                    <button onClick={incHandler}>Inc</button>
                </div>
                <div>
                    <button onClick={setToLocalStorageHandler}>setToLocalStorageHandler</button>
                </div>
                <div>
                    <button onClick={getFromLocalStorageHandler}>getFromLocalStorageHandler</button>
                </div>
                <div>
                    <button onClick={clearLocalStorageHandler}>clearLocalStorageHandler</button>
                </div>
                <div>
                    <button onClick={removeFromLocalStorageHandler}>removeFromLocalStorageHandler</button>
                </div>
            </header>
        </div>
    );
}

export default App;
