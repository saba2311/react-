import React from "react";
import { DynamicAvatar } from "./DynamicAvatar";

const DynamicProfileCard = ({ student = {} }) => {
  return (
    <div className="card profile-card border-0 h-100 shadow-sm">
      <div className="card-body text-center">
        <DynamicAvatar
          image={student.image}
          name={student.name || "Unknown name"}
        />

        <h5 className="fw-bold mt-3">{student.name || "Unknown Name"}</h5>

        <h6 className="text-muted">{student.role || "No Role"}</h6>

        <p className="small text-secondary mt-3">
          {student.description || "No Description"}
        </p>
      </div>
    </div>
  );
};

export default DynamicProfileCard;