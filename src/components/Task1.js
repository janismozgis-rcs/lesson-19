import { useState } from 'react';

function Task1() {
    const [text, setText] = useState('Foo');
    const [color, setColor] = useState('red');
    const handleButtonClick = () => {
        if (text === 'Foo') {
            setText('Bar');
            setColor('blue');
        } else {
            setText('Foo');
            setColor('red');
        }
    }

    // an alternative with using only 1 state instad of 2
    // let color = 'red';
    // if (text === 'Bar') {
    //     color = 'blue';
    // }

    return (
        <div>
            <h1>Task 1</h1>
            <h3 style={{color}}>{text}</h3>
            <button onClick={handleButtonClick}>Click me!</button>
        </div>
    )
}

export default Task1;