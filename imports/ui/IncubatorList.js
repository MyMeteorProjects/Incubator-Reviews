import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import IncubatorListItem from './IncubatorListItem';
import {Incubators} from '../api/incubators';


export default class IncubatorList extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      incubators:[]
    }
  }
  componentDidMount() { // lifecycle method
      this.incubatorsTracker = Tracker.autorun(() => {
        Meteor.subscribe('incubators'); // this is the subscription method the argument that is inserted is the same string name we gave the publication in the links API
        const incubators = Incubators.find({}).fetch();
           //seesion is a client side package, it is used to store current state of code  and is takes to args- key and val

        this.setState({ Incubators })
      });
      console.log('Component did mount IncubatorsList');
    }
  componentWillUnmount(){  // lifecycle method
      console.log('Component will unmount IncubatorsList');
      this.incubatorsTracker.stop();
    }

  renderIncubatorListItems() {

      if(this.state.incubators.length === 0) {
        return (
          <div className="item">
            <p className="item__status-message">No Incubators Added</p>
          </div>
        )
      }
      return this.state.incubators.map((incubator) => {
        const shortUrl = Meteor.absoluteUrl(link._id)
        return <IncubatorsListItem key={incubator._id} {...incubator}/>
      });
    }

    render() {
      return(
        <div>
          Incubator List Component
          <IncubatorListItem/>
          {this.renderIncubatorListItems()}
        </div>
      )
    }
  }
