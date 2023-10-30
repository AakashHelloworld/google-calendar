import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarCmponent({value, setValue}) {
  const changeHandler = (e) =>{
    setValue(e)
  }
  return (
    <div>
      <Calendar className={'border-none'} onChange={changeHandler} value={value} />
    </div>
  );
}