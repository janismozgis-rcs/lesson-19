import { useState } from 'react';

function Task2() {
    const [text, setText] = useState('Foo');
    const handleButtonClick = () => {
        if (text === 'Foo') {
            setText('Bar');
        } else if (text === 'Bar') {
            setText('Baz');
        } else {
            setText('Foo');
        }
    }

    return (
        <div>
            <h1>Task 2</h1>
            <button onClick={handleButtonClick}>{ text }</button>
        </div>
    )
}

export default Task2;