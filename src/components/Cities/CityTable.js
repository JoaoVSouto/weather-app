import React from 'react';

import CityRow from './CityRow';

const CityTable = ({ capitalsInfo }) => (
  <table className="cities__info__capitals">
    <thead>
      <tr>
        <th>Min</th>
        <th>Máx</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {capitalsInfo &&
        capitalsInfo.map(capital => (
          <CityRow
            key={capital.city}
            min={capital.min}
            max={capital.max}
            city={capital.city}
          />
        ))}
    </tbody>
  </table>
);

export default CityTable;
