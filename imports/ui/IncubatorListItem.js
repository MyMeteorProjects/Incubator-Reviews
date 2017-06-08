import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import ReviewList from './ReviewList';
import {Incubators} from '../api/incubators';


export default class IncubatorListItem extends React.Component {


    render() {
      return(
        <div>
          Incubator List Item Component
          
          <ReviewList/>
        </div>
      )
    }
};
