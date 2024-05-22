

import React, { useState } from 'react';
import './Partition.css';
import { ResizableBox } from 'react-resizable';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const Partition = ({ color, onRemove, id }) => {
    const [isSplit, setIsSplit] = useState(false);
    const [splitDirection, setSplitDirection] = useState(null);
    const [childColors, setChildColors] = useState([]);

    const handleSplit = (direction) => {
        setIsSplit(true);
        setSplitDirection(direction);
        setChildColors([color, getRandomColor()]);
    };

    return (
        <div className="partition" style={{ backgroundColor: color }}>
            <div className="controls">
                {!isSplit && <button onClick={() => handleSplit('vertical')}>V</button>}
                {!isSplit && <button onClick={() => handleSplit('horizontal')}>H</button>}
                <button onClick={() => onRemove(id)}>−</button>
            </div>
            {isSplit ? (
                splitDirection === 'vertical' ? (
                    <div className="split vertical">
                        <ResizableBox width={Infinity} height={Infinity} axis="x" className="resizable-box">
                            <Partition color={childColors[0]} onRemove={onRemove} id={`${id}-1`} />
                        </ResizableBox>
                        <ResizableBox width={Infinity} height={Infinity} axis="x" className="resizable-box">
                            <Partition color={childColors[1]} onRemove={onRemove} id={`${id}-2`} />
                        </ResizableBox>
                    </div>
                ) : (
                    <div className="split horizontal">
                        <ResizableBox width={Infinity} height={Infinity} axis="y" className="resizable-box">
                            <Partition color={childColors[0]} onRemove={onRemove} id={`${id}-1`} />
                        </ResizableBox>
                        <ResizableBox width={Infinity} height={Infinity} axis="y" className="resizable-box">
                            <Partition color={childColors[1]} onRemove={onRemove} id={`${id}-2`} />
                        </ResizableBox>
                    </div>
                )
            ) : null}
        </div>
    );
};

export default Partition;

