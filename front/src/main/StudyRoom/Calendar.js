import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './css/calendar.css';
const Calendar = () => {
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    // 서버에서 이벤트 데이터 가져오기
    const fetchData = async () => {
      try {
        const response = await fetch('API_ENDPOINT'); // API_ENDPOINT를 실제 서버 주소로 대체해야 합니다.
        const eventData = await response.json();

        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDateClick = (info) => {
    // FullCalendar 인스턴스에 액세스
    const calendarApi = calendarRef.current.getApi();

    // 새로운 이벤트 추가
    const newEvent = {
      title: 'New Event',
      start: info.dateStr,
      allDay: true,
    };

    // FullCalendar에 이벤트 추가
    calendarApi.addEvent(newEvent);
  };

  const handleAddEventClick = () => {
    // FullCalendar 인스턴스에 액세스
    const calendarApi = calendarRef.current.getApi();

    // 새로운 이벤트 추가
    const newEvent = {
      title: 'New Event from Button',
      start: new Date(), // 현재 날짜 및 시간으로 설정
      allDay: true,
    };

    // FullCalendar에 이벤트 추가
    calendarApi.addEvent(newEvent);
  };

  return (
    <div id="calendar">
      <button onClick={handleAddEventClick}>Add Event</button>
      <FullCalendar
        ref={calendarRef} // ref 설정
        initialView="dayGridMonth"
        plugins={[dayGridPlugin]}
        selectable={true}
        events={events}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Calendar;
