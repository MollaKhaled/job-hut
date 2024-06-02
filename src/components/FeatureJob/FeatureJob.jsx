import React from 'react';
import './FeatureJob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const FeatureJob = ({featureJob}) => {
  const {_id, company, title, location, empolyment_type, job_type, salary, url, description, education, exprience} = featureJob;
  return (
    <div className='job-container'>
      <img className='feature-img' src={url} alt="" />
      <h3>{title}</h3>
      <h4>{company}</h4>
      <h5>{job_type}</h5>
      <div className='location-salary'>
      <h4> <FontAwesomeIcon icon={faLocationDot} /> Location: {location}</h4>
      <h4>$Salary:{salary}</h4>
      </div>
      <button className='btn-proceed'>View Details</button>
    </div>
  );
};

export default FeatureJob;