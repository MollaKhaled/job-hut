import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobCategoryList.css'

const JobCategoryList = ({jobCategory}) => {
   const {category_name, number_of_jobs, image_url} = jobCategory;
   console.log(jobCategory.image_url);
  return (
   <div className='category-list'>    
       <img className='category-img' src={image_url} alt="" />
           <h4>{category_name}</h4>
           <p>{number_of_jobs}</p>

    </div>
  );
};

export default JobCategoryList;