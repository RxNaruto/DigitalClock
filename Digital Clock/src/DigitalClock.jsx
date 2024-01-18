import { useState,useEffect} from "react";
import React from "react";

const DigitalClock=()=>{

    const[time,setTime]=useState(new Date());
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }

    },[]);

    function formatTime(){
        let hrs=time.getHours();
        const min=time.getMinutes();
        const sec=time.getSeconds();
        const meridiem=hrs >=12 ? "PM" : "AM";

        hrs=hrs%12 || 12;

        return `${padZero(hrs)}:${padZero(min)}:${sec} ${padZero(meridiem)}`
    }
    function padZero(number){
        return (number < 10 ? "0" : "")+number;

    }
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>

        </div>
    )
}

export default DigitalClock;