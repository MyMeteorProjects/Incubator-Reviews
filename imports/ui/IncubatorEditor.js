import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import ReviewList from './ReviewList';
import {Incubators} from '../api/incubators';
import PrivateHeader from './PrivateHeader';



export default class IncubatorEditor extends React.Component {


    render() {
      return(
        <div>
          <PrivateHeader title="Dashboard"/>
          Incubator Editor

        </div>
      )
    }
};
