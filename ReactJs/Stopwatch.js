import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{

        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current)
            },10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        let hours = Math.floor(elapsedTime/ (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime/ (1000 * 60)%60);
        let seconds = Math.floor(elapsedTime/ (1000)%60);
        let milliseconds = Math.floor((elapsedTime% 1000) / 10);
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
    return(
       <div>
        <div>
            {
                formatTime()
            }
        </div>
        <div>
            <button onClick={start}> Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
       </div>
    );
}
export default Stopwatch