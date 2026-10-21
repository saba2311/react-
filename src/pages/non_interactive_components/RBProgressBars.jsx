import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function RBProgressBars() {
  const [progress, setProgress] = useState(5);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 5, 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 5, 0));
  };

  return (
    <div className="component-page">
      <h1 className="component-title">Progress Bars</h1>

      {/* Adjustment Buttons */}

      <div className="progress-controls">
        <Button
          variant="primary"
          onClick={increaseProgress}
        >
          Progress + 5%
        </Button>

        <Button
          variant="danger"
          onClick={decreaseProgress}
        >
          Progress - 5%
        </Button>
      </div>

      <div className="top-progress">
        <p>Completed {progress}%</p>

        <ProgressBar
          now={progress}
          variant="success"
        />
      </div>

      <div className="project-card">
        <div className="project-header">
          <div>
            <h2>Bootstrap Dashboard Application</h2>

            <span>Web Development</span>
          </div>
        </div>

        <p className="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>

        <div className="project-status">
          <Badge bg="info">In Progress</Badge>

          <ProgressBar
            now={progress}
            label={`${progress}%`}
          />
        </div>

        <div className="project-footer">
          <div>
            <span className="metric-label">Due Date</span>

            <strong>1 June, 2022</strong>
          </div>

          <div>
            <span className="metric-label">Budget</span>

            <strong>$123,000</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RBProgressBars;