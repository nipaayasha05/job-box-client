import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobList from "./MyPostedJobList";
import { jobsCreatedByPromise } from "../../api/jobsApi";

const MyPostedJob = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3 className="text-3xl">My Posted Jobs:</h3>
      <Suspense>
        <MyPostedJobList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></MyPostedJobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJob;
