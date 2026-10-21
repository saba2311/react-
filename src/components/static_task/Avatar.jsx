import React from "react";
import avatar from "../../assets/screenshot.jpeg";

export function Avatar() {
  return (
    <img
      src={avatar}
      className="rounded-circle mx-auto"
      width="100"
      height="100"
      style={{ objectFit: "cover" }}
      alt="student"
    />
  );
}