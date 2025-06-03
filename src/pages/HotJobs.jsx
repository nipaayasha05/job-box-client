import React, { use } from "react";
import JobCard from "./JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  //   console.log(jobs);
  return (
    <div>
      <h4 className="text-4xl py-5">Hot Jobs of the Day</h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
