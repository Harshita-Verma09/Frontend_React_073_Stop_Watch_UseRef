import React, { useRef, useState } from 'react';
import './WatchStop.css';


const WatchStop = () => {
    const [time, setTime] = useState<number>(0);
    const timeRef = useRef<ReturnType<typeof setInterval> | null>(null);

    

    const handleStart = (): void => {
        if (timeRef.current) return;

        timeRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    };

    const handleStop = (): void => {
        if (timeRef.current) {
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
    };

    const handleReset = (): void => {
        handleStop();
        setTime(0);
    };


    return (
        <div className="watch-container">
            <p className="timer">{time} second</p>
            <div className="buttons">
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default WatchStop;
