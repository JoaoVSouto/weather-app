import React from 'react';

import DayBox from './DayBox';

import './info-box.css';

const InfoBox = () => (
  <div className="info-box">
    <div className="info-box_padding-wrapper">
      <div className="info-box__first-row">
        <h5 className="info-box__first-row__city">Niterói, RJ - Brasil</h5>
        <span className="material-icons">close</span>
      </div>
      <h2 className="info-box__temperature">20°C Nublado</h2>
      <div className="info-box__third-row">
        <div className="info-box__third-row__first-group">
          <div className="info-box__third-row__first-group__min-max">
            <span className="info-box__third-row__first-group__min-max__min">
              <span className="material-icons">arrow_downward</span>16°
            </span>
            <span className="info-box__third-row__first-group__min-max__max">
              <span className="material-icons">arrow_upward</span>25°
            </span>
          </div>
          <p className="info-box__third-row__first-group__wind">
            Vento <strong className="speed">18km/h</strong>
          </p>
        </div>
        <div className="info-box__third-row__second-group">
          <p className="info-box__third-row__second-group__sensation">
            Sensação <strong className="deg">19°C</strong>
          </p>
          <p className="info-box__third-row__second-group__humidity">
            Humidade <strong className="percent">89%</strong>
          </p>
        </div>
      </div>
    </div>
    <div className="info-box__hr" />
    <div className="info-box__future-days">
      <DayBox dayName="Terça" min="18" max="26" />
      <DayBox dayName="Quarta" min="18" max="28" />
      <DayBox dayName="Quinta" min="19" max="30" />
      <DayBox dayName="Sexta" min="23" max="35" />
      <DayBox dayName="Sábado" min="23" max="37" />
    </div>
  </div>
);

export default InfoBox;
