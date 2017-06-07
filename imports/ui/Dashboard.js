import React from 'react';

import PrivateHeader from './PrivateHeader';
import IncubatorList from './IncubatorList';
import IncubatorListItem from './IncubatorList';


export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        Dashboard page content.
        <IncubatorList/>
      </div>
    </div>
  );
};
