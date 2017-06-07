import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import IncubatorListItem from './IncubatorListItem';


export default class IncubatorList extends React.Component {


    render() {
      return(
        <div>
          Incubator List Component
          <IncubatorListItem/>
        </div>
      )
    }
  }
