import React from 'react';

const CityRow = ({ city, min, max }) => (
  <tr>
    <td>{min}°</td>
    <td>{max}°</td>
    <td>{city}</td>
  </tr>
);

export default CityRow;
