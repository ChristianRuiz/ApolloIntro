import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './loading.css';

const Loading = () => (
  <div className="loading">
    <CircularProgress color="secondary" />
  </div>
);

export default Loading;
