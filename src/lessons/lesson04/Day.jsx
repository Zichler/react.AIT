import { useState } from "react";
import "./"
export default function Day() {
    const [isDay, setDay] = useState(false);
    const dayNight = () => {
        setDay((prev) => !prev);
      }; 

  return (
    <div>
        <h1>{isDay ? "День 🌞" : "Ночь🌘"}</h1>
      <button onClick={dayNight}>On/Off</button>
    </div>
  )
}