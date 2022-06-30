import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const Calender = () => {
  const [date, setDate] = useState(new Date());
  const css = `.my-selected:not([disabled]) { 
        background: #19D3AE;
        color: white;
      }.my-selected:hover:not([disabled]) { 
            background: #19D3AE;
            color: white;
          }`;
  return (
    <div class="hero mt-28">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <style>{css}</style>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
