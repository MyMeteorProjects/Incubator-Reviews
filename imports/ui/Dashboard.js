import React from 'react';
import { Link } from 'react-router';

import PrivateHeader from './PrivateHeader';
import IncubatorList from './IncubatorList';
import IncubatorListItem from './IncubatorList';
import IncubatorEditor from './IncubatorEditor';


export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        Dashboard page content.
        <IncubatorList/>
        <Link to="/IncubatorEditor">Add Incubator</Link>
      </div>
    </div>
  );
};
