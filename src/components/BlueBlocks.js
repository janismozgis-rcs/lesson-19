import { useState } from 'react';

function BlueBlocks() {
    const [activeBlockIndex, setActiveBlockIndex] = useState(0);

    const blockList = [];
    for (let i = 0; i < 5; i++) {
        const color = activeBlockIndex === i ? 'red' : 'blue';

        blockList.push(<div
            style={
                {
                    height: '100px',
                    width: '100px',
                    background: color,
                    marginRight: '10px',
                }}></div>
        )
    }
    const handleLeftClick = () => {
        let number = activeBlockIndex - 1;
        if (number < 0) {
            number = 0;
        }

        setActiveBlockIndex(number);
    }

    const handleRightClick = () => {
        let number = activeBlockIndex + 1;
        if (number > 4) {
            number = 4;
        }

        setActiveBlockIndex(number);
    }

    return (
        <div>
            <div style={{display: 'flex'}}>
                {blockList}
            </div>
            <div>
                <button onClick={handleLeftClick}>Left</button>
                <button onClick={handleRightClick}>Right</button>
            </div>
        </div>
    );
}

export default BlueBlocks;