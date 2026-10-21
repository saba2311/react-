import React from "react";
import students from "../../components/dynamic_task/student";
import { DynamicHeader } from "../../components/dynamic_task/DynamicHeader";
import DynamicProfileCard from "../../components/dynamic_task/DynamicProfileCard";
import { DynamicFooter } from "../../components/dynamic_task/DynamicFooter";
const Dynamic = () => {
  function showCards() {
    document.getElementById("clickText").style.display = "none";
    document.getElementById("cards").style.display = "block";
  }

  return (
    <div className="container  mt-5 text-center">
      <button
        id="clickText"
        className="btn btn-danger px-4 py-2 shadow"
        onClick={showCards}
      >
        Click Here to see Output...
      </button>

      <div
        id="cards"
        style={{ display: "none" }}
      >
        <DynamicHeader />

        <div className="row justify-content-center g-4">
          {students.map((student, index) => (
            <div
              className="col-md-4 d-flex justify-content-center"
              key={index}
            >
              <DynamicProfileCard student={student} />
            </div>
          ))}
          <DynamicProfileCard />
        </div>
        <DynamicFooter />
      </div>
    </div>
  );
};

export default Dynamic;