import React from 'react';
import JobCategoryList from '../JobCategory/JobCategoryList';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import FeatureJob from '../FeatureJob/FeatureJob';

const Home = () => {
  const { jobCategories, featureJobs } = useLoaderData();
 
  return (
    <div className='home-container'>
     <h1>Job Category List</h1>
    <p>Explore thousands of job opportunities with all the information you need. Its your future</p> 
   <div className="job-categories-container">
   {
      jobCategories.map(jobCategory => <JobCategoryList
      key={jobCategory.id}
      jobCategory ={jobCategory}
      ></JobCategoryList>)
    }
   </div>
   <div>
    <h1>Featured Jobs</h1>
    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
   <div className='feature-container'>
   {
      featureJobs.map(featureJob => <FeatureJob
        key= {featureJob._id}
        featureJob = {featureJob}
      ></FeatureJob>)
    }
   </div>
    
   </div>
   
    </div>
   
  );
};

export default Home;