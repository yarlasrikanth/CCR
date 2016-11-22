import { Meteor } from 'meteor/meteor';
import '../api/tasks.js';


//Tasks = new Mongo.Collection('tasks');
Meteor.startup(() => {
	
  // code to run on server at startup


Router.route('/CCR/Notify', { where: 'server' })
  
  .post(function () {
  
	    console.log("Test post1");
	  	this.response.writeHead(200, {'Content-Type':'application/json'});
	    this.response.end(JSON.stringify({
	      key: 'Thank you for Notification'
	    }));
    
    })


  Router.route('/CCR/Notify1', { 
  	where: 'server',
  	name: "CCR_NOTIFIY1",
  	
  	action: function () {
    // render all templates and regions for this route
       this.response.writeHead(200, {'Content-Type':'application/json'});
       this.response.end(JSON.stringify({ key: 'Thank you for Notification'}));
    },
    onAfterAction: function () {
    	Meteor.call('addTask');
    	console.log("Test post1");

    }
   });
  

  
});
  
