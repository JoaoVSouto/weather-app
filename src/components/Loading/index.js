import React from 'react';

import './loading.css';

const Loading = ({ loadingOpen }) => (
  <div className={`loader ${loadingOpen ? 'd-block' : 'd-none'}`} />
);

export default Loading;
