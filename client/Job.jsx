import React, { Component, PropTypes } from 'react';
 
// Job component - represents a single job item
export default class Job extends Component {
  render() {
    return (
      <li>{this.props.job.text}</li>
    );
  }
}
 
Job.propTypes = {
  // This component gets the job to display through a React prop.
  // We can use propTypes to indicate it is required
  job: PropTypes.object.isRequired,
};