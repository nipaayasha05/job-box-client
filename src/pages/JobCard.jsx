import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    description,
    company_logo,
    company,
    requirements,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex items-center gap-5">
        <figure>
          <img className="w-20" src={company_logo} />
        </figure>
        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex items-center gap-2">
            {" "}
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          salary : {salaryRange.min}-{salaryRange.max} {salaryRange.currency}{" "}
        </p>
        <p className="h-25">{description}</p>
        <div className="card-actions ">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Link to={`jobs/${_id}`} className=" btn btn-primary  ">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
