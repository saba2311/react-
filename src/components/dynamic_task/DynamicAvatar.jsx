import React from "react";

export function DynamicAvatar({ image, name }) {
  return (
    <img
      src={image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
      className="rounded-circle mx-auto"
      width="100"
      height="100"
      style={{ objectFit: "cover" }}
      alt={name || "unknown name"}
    />
  );
}