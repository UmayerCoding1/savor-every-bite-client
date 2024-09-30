import React, { useEffect, useState } from "react";
import "./countDown.css";
const CountDown = ({offerEnd,handleShopBtn}) => {
  const [defTime, setDef] = useState(true);
  handleShopBtn(defTime)
  const [day, setDay] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const endDate = offerEnd;

  const getTime = () => {
    const end = Date.parse(endDate);
    const now = Date.now();
    const def = (end - now) / 1000;
    
    if(def < 0){
        setDef(false);
        return;
    }
    setDay(Math.floor(def / 3600 /24));
    setHrs(Math.floor((def / 3600)% 24));
    setMins(Math.floor((def / 3600)% 60));
    setSecs(Math.floor((def) % 3600));
  }

//   setInterval(() => {
//     getTime();
//   },1000)

  useEffect(() => {
    setInterval(() => {getTime()},1000)
    
  },[getTime])

  return (
    <div className="mt-10 flex items-center lg:mt-0 lg:mb-5">
      <input type="text" name="day" id="day" readOnly value={day} /> <br />
      <input type="text" name="" id="hrs" readOnly value={hrs} /> <br />
      <input type="text" name="" id="m" readOnly value={mins} /> <br />
      <input className="text-[10px]" type="text" name="" id="s" readOnly value={secs} /> <br />
    </div>
  );
};

export default CountDown;
