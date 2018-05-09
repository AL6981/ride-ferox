import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <div className="back-link">
      <button onClick={browserHistory.goBack}>BACK</button>
    </div>
  )
}

export default BackButton;
