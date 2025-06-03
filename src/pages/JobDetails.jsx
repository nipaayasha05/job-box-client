import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company } = useLoaderData();
  //   console.log(data);

  return (
    <div>
      <h2 className="text-6xl">Job details of:{title}</h2>
      <p className="py-5">company : {company}</p>
      <Link to={`/jobApply/${_id}`} className="btn btn-primary">
        Apply Now
      </Link>
    </div>
  );
};

export default JobDetails;
