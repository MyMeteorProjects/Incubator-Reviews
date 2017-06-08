import React from 'react';
import { Meteor } from 'meteor/meteor';

import StarReview from './StarReview';


export default class ReviewListItem extends React.Component {


    render() {
      return(
        <div>
          ReviewListItem Component
        <StarReview/>

        </div>
      )
    }
};
