import React from 'react';
import { Meteor } from 'meteor/meteor';

import ReviewListItem from './ReviewListItem'

export default class ReviewList extends React.Component {


    render() {
      return(
        <div>
          ReviewList Component

          <ReviewListItem/>
        </div>
      )
    }
};
