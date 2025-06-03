import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationApi";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div className="py-10">
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={"loading your application"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
