import React from 'react';

import CityTable from './CityTable';
import Loading from '../Loading';

import './cities.css';

const Cities = ({ capitalsInfo }) => {
  console.log(capitalsInfo);
  return (
    <main className="cities">
      <h3 className="cities__header">Capitais</h3>
      <section className="cities__info">
        {capitalsInfo ? (
          <React.Fragment>
            <CityTable capitalsInfo={capitalsInfo.slice(0, 5)} />
            <CityTable capitalsInfo={capitalsInfo.slice(5, 10)} />
          </React.Fragment>
        ) : (
          <Loading loadingOpen={true} />
        )}
      </section>
    </main>
  );
};

export default Cities;
