const homeLoader = async() => {
  const jobCategoriesResponse = await fetch('/jobCategories.json');
  const jobCategories = await jobCategoriesResponse.json();
  
  const featureJobsResponse = await fetch('/featuredJobs.json');
  const featureJobs = await featureJobsResponse.json();

  return { jobCategories, featureJobs };
}
export default homeLoader;
