import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function RBButtonGroups() {
  const [alignment, setAlignment] = useState("left");

  return (
    <div className="component-page">
      <h1 className="component-title">Button Group</h1>

      <div className="button-group-section">
        <h2>Button Groups</h2>

        <ButtonGroup>
          <Button
            variant="secondary"
            onClick={() => setAlignment("left")}
          >
            <i className="bi bi-text-left"></i>
            <span>Left</span>
          </Button>

          <Button
            variant="secondary"
            onClick={() => setAlignment("center")}
          >
            <i className="bi bi-text-center"></i>
            <span>Center</span>
          </Button>

          <Button
            variant="secondary"
            onClick={() => setAlignment("right")}
          >
            <i className="bi bi-text-right"></i>
            <span>Right</span>
          </Button>
        </ButtonGroup>

        <div
          className="button-group-output"
          style={{ textAlign: alignment }}
        >
          Here, the actions of the above buttons will be reflected.
        </div>
      </div>
    </div>
  );
}

export default RBButtonGroups;