"use client"

import { Calendar } from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
type ValuPiece = Date | null;

type Value = ValuPiece | [ValuPiece, ValuPiece];
const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className=""><Calendar onChange={onChange} value={value} /></div>
  )
}

export default EventCalender