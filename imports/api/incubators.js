import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Incubators = new Mongo.Collection('incubators')

if(Meteor.isServer) {
  Meteor.publish('incubators', function () { //this is the publication, we need to subscribe to it in the incubatorlist component
    return Incubators.find({}); //this is the exact syntax to get all the incubators
  }); // this function makes the publish available to everyone
}

Meteor.methods({
  'incubators.insert'(title) {
    if(!this.userId){
      throw new Meteor.Error('Not Authorized');
    }

 //using the try catch method gives access to simple schema errors which are being swiched with meteor errors
      new SimpleSchema({
        title: {
          type: String
        }
      }).validate({title});// es6 syntax equel to: url: url

    Incubators.insert({ // this is what the docs on the database hold
      _id: shortid.generate(),
      title: title,
      userId: this.userId, // required to know who inserted the incubator
      text: '', // the incubator description
      starReview: 5
    })
  }
})
