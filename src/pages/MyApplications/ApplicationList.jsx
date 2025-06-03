import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h3 className="text-3xl">jobs Applied so far : {applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>

              <th>View Application</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((applicant, index) => (
              <JobApplicationRow
                key={applicant._id}
                index={index}
                applicant={applicant}
              ></JobApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
