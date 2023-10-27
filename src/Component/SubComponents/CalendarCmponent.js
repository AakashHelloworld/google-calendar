import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarCmponent() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar className={'border-none'} onChange={onChange} value={value} />
    </div>
  );
}