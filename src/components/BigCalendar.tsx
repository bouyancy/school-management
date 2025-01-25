"use client"

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '@/lib/data';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view,setView] = useState<View>(Views.WORK_WEEK);

  const handelOnChangeView = (selectedView:View)=>{
    setView(selectedView);
  }
  return(
    <Calendar
    localizer={localizer}
    events={calendarEvents}
    startAccessor="start"
    endAccessor="end"
    views={['work_week','day']}
    view= {view}
    onView={handelOnChangeView}
    style={{ height: "98%" }}
    min = {new Date(2025,1,0,8,0,0)}
    max = {new Date(2026,1,0,17,0,0)}
    defaultDate={new Date(2025, 1, 20, 9, 45)}
    />
  );
};

export default BigCalendar;