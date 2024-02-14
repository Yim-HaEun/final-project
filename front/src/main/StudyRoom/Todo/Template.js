import React from 'react';
import ReactCalendar from '../ReactCalendar';

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <ReactCalendar />
      <div className="title">오늘의 할 일 ({todoLength}) </div>
      <div>{children}</div>
    </div>
  );
};
export default Template;
