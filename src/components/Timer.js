import {React,useState,useEffect} from 'react';

export const Timer = ({seconds}) => {

    const [remainingSeconds, setRemainingSeconds] = useState(seconds);
    const [clockTime, setClockTime] = useState("");

    useEffect(() => {
        const timer = remainingSeconds >= 0 && setInterval(() => {
            
            var mm = parseInt(remainingSeconds/60, 10);
            var ss =  remainingSeconds%60;
            mm = mm < 10 ? "0" + mm : mm;
            ss = ss < 10 ? "0" + ss : ss;
            setClockTime(mm + ":" + ss);
            setRemainingSeconds(remainingSeconds - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [remainingSeconds]);
    return (
        <div>
            {clockTime}
        </div>
    )
}
