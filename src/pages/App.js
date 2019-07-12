import React, { Component } from 'react';

import callApi from '../api/call';

import Header from '../components/Header';
import InfoBox from '../components/InfoBox';
import SearchBox from '../components/SearchBox';
import Cities from '../components/Cities';
import Loading from '../components/Loading';

import './App.css';

export default class App extends Component {
  state = {
    infoBoxOpen: false,
    loadingOpen: false,
    boxCityInfo: {},
    capitalsInfo: null
  };

  async componentDidMount() {
    try {
      const cities = await Promise.all([
        callApi('Rio de Janeiro'),
        callApi('São Paulo'),
        callApi('Belo Horizonte'),
        callApi('Brasília'),
        callApi('Belém'),
        callApi('Salvador'),
        callApi('Curitiba'),
        callApi('Fortaleza'),
        callApi('Manaus'),
        callApi('João Pessoa')
      ]);

      const citiesTreated = cities.map(city => ({
        city: city.data.location.city,
        min: city.data.forecasts[0].low,
        max: city.data.forecasts[0].high
      }));

      this.setState({ capitalsInfo: citiesTreated });
    } catch (e) {
      console.log(e);
    }
  }

  openInfoBox = state => {
    this.setState({ infoBoxOpen: state });
  };

  openLoading = state => {
    this.setState({ loadingOpen: state });
  };

  updateBoxCityInfo = info => {
    this.setState({ boxCityInfo: info });
  };

  render() {
    const { infoBoxOpen, boxCityInfo, capitalsInfo, loadingOpen } = this.state;
    return (
      <div className="app">
        <Header />
        <Loading loadingOpen={loadingOpen} />
        <InfoBox
          infoBoxState={infoBoxOpen}
          openInfoBox={this.openInfoBox}
          boxCityInfoState={boxCityInfo}
        />
        <SearchBox
          openInfoBox={this.openInfoBox}
          openLoading={this.openLoading}
          updateBoxCityInfo={this.updateBoxCityInfo}
        />
        <Cities capitalsInfo={capitalsInfo} />
      </div>
    );
  }
}
