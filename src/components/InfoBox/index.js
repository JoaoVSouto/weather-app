import React from 'react';

import DayBox from './DayBox';

import './info-box.css';

const InfoBox = ({ infoBoxState, openInfoBox, boxCityInfoState }) => {
  const {
    city,
    region,
    country,
    temperature,
    condition,
    min,
    max,
    wind,
    sensation,
    humidity,
    forecasts
  } = boxCityInfoState;
  return (
    <div className={`info-box ${infoBoxState ? 'd-flex' : 'd-none'}`}>
      <div className="info-box_padding-wrapper">
        <div className="info-box__first-row">
          <h5 className="info-box__first-row__city">
            {city},{region} - {country}
          </h5>
          <span className="material-icons" onClick={() => openInfoBox(false)}>
            close
          </span>
        </div>
        <h2 className="info-box__temperature">
          {temperature}°C {condition}
        </h2>
        <div className="info-box__third-row">
          <div className="info-box__third-row__first-group">
            <div className="info-box__third-row__first-group__min-max">
              <span className="info-box__third-row__first-group__min-max__min">
                <span className="material-icons">arrow_downward</span>
                {min}°
              </span>
              <span className="info-box__third-row__first-group__min-max__max">
                <span className="material-icons">arrow_upward</span>
                {max}°
              </span>
            </div>
            <p className="info-box__third-row__first-group__wind">
              Vento <strong className="speed">{wind}km/h</strong>
            </p>
          </div>
          <div className="info-box__third-row__second-group">
            <p className="info-box__third-row__second-group__sensation">
              Sensação <strong className="deg">{sensation}°C</strong>
            </p>
            <p className="info-box__third-row__second-group__humidity">
              Humidade <strong className="percent">{humidity}%</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="info-box__hr" />
      <div className="info-box__future-days">
        {forecasts &&
          forecasts.map(day => (
            <DayBox
              key={day.day}
              dayName={day.day}
              min={day.min}
              max={day.max}
            />
          ))}
      </div>
    </div>
  );
};

export default InfoBox;
