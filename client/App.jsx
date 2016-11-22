import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Tasks } from '../api/tasks.js';
 
import Job from './Job.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  
  renderJobs() {
  return this.props.jobs.map((job) => (
      <Job key={job._id} job={job} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Jobs</h1>
        </header>
 
        <ul>
         // {this.renderJobs()}
        </ul>
      </div>
    );
  }
}
App.propTypes = {
  jobs: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    jobs: Tasks.find({}).fetch(),
  };
}, App);