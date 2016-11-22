import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
	addTask: function(){
			Tasks.insert({
      text:"notified job",
      createdAt: new Date() // current time
    });

	}
})