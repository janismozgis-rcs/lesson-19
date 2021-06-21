import { useState } from 'react';

function Task3() {
    const [number, setNumber] = useState(0);
    const handleNumberChange = (numberToChange) => {
        setNumber(number + numberToChange)
    }

    return (
        <div>
            <h1>Task 3</h1>
            <div>
                <button onClick={() => handleNumberChange(-5)}>-5</button>
                <button onClick={() => handleNumberChange(-1)}>-1</button>
                <input type="text" value={number} readOnly />
                <button onClick={() => handleNumberChange(1)}>+1</button>
                <button onClick={() => handleNumberChange(5)}>+5</button>
            </div>
        </div>
    )
}

export default Task3;