import React from 'react';

const DayBox = ({ dayName, min, max }) => (
  <div className="info-box__future-days__day-box">
    <h4 className="info-box__future-days__day-box__title">{dayName}</h4>
    <div className="info-box__future-days__day-box__min-max">
      <span className="min">{min}°</span>
      <span className="max">{max}°</span>
    </div>
  </div>
);

export default DayBox;
