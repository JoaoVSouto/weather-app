import React, { Component } from 'react';

import callApi from '../../api/call';

import 'material-icons/iconfont/material-icons.css';
import './search-box.css';

export default class SearchBox extends Component {
  state = {
    city: ''
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = async e => {
    e.preventDefault();
    this.setState({ city: '' });
    this.props.openInfoBox(false);
    this.props.openLoading(true);
    try {
      const resp = await callApi(this.state.city);
      const { current_observation, forecasts, location } = resp.data;
      const info = {
        city: location.city,
        region: location.region,
        country: location.country,
        temperature: current_observation.condition.temperature,
        wind: current_observation.wind.speed,
        sensation: current_observation.wind.chill,
        humidity: current_observation.atmosphere.humidity,
        condition: current_observation.condition.text,
        max: forecasts[0].high,
        min: forecasts[0].low,
        forecasts: [
          {
            day: forecasts[1].day,
            max: forecasts[1].high,
            min: forecasts[1].low
          },
          {
            day: forecasts[2].day,
            max: forecasts[2].high,
            min: forecasts[2].low
          },
          {
            day: forecasts[3].day,
            max: forecasts[3].high,
            min: forecasts[3].low
          },
          {
            day: forecasts[4].day,
            max: forecasts[4].high,
            min: forecasts[4].low
          },
          {
            day: forecasts[5].day,
            max: forecasts[5].high,
            min: forecasts[5].low
          }
        ]
      };
      this.props.updateBoxCityInfo(info);
      this.props.openLoading(false);
      this.props.openInfoBox(true);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { city } = this.state;
    return (
      <div className="search-box">
        <form className="search-box__form" onSubmit={this.onFormSubmit}>
          <div className="search-box__form__form-control">
            <input
              type="text"
              name="city"
              className="search-box__form__form-control__input"
              placeholder="Insira aqui o nome da cidade"
              onChange={this.onInputChange}
              value={city}
            />
            <span className="material-icons" onClick={this.onFormSubmit}>
              search
            </span>
          </div>
        </form>
      </div>
    );
  }
}
