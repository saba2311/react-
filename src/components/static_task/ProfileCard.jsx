import React from "react";
import { Avatar } from "./Avatar";

export default function ProfileCard() {
  return (
    <div
      className="card text-center p-4 shadow-sm"
      style={{ width: "300px" }}
    >
      <Avatar />

      <h2 className="fs-4 mt-3 mb-1">
        John Doe
      </h2>

      <h3 className="fs-6 text-secondary">
        Frontend Development Student
      </h3>

      <p className="small text-secondary">
        I enjoy building clean and responsive user
        interfaces using React.
      </p>
    </div>
  );
}