import React from 'react';

import './cities.css';

const Cities = () => (
  <main className="cities">
    <h3 className="cities__header">Capitais</h3>
    <section className="cities__info">
      <table className="cities__info__capitals">
        <thead>
          <tr>
            <th>Min</th>
            <th>Máx</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>18°</td>
            <td>27°</td>
            <td>Rio de Janeiro</td>
          </tr>
          <tr>
            <td>14°</td>
            <td>22°</td>
            <td>São Paulo</td>
          </tr>
          <tr>
            <td>21°</td>
            <td>32°</td>
            <td>Belo Horizonte</td>
          </tr>
          <tr>
            <td>24°</td>
            <td>37°</td>
            <td>Brasília</td>
          </tr>
          <tr>
            <td>24°</td>
            <td>37°</td>
            <td>Belém</td>
          </tr>
        </tbody>
      </table>
      <table className="cities__info__capitals second">
        <thead>
          <tr>
            <th>Min</th>
            <th>Máx</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23°</td>
            <td>37°</td>
            <td>Salvador</td>
          </tr>
          <tr>
            <td>5°</td>
            <td>14°</td>
            <td>Curitiba</td>
          </tr>
          <tr>
            <td>21°</td>
            <td>32°</td>
            <td>Fortaleza</td>
          </tr>
          <tr>
            <td>24°</td>
            <td>37°</td>
            <td>Manaus</td>
          </tr>
          <tr>
            <td>28°</td>
            <td>40°</td>
            <td>João Pessoa</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
);

export default Cities;
