import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function RBSpinners() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
  };

  const handleCancel = () => {
    setSubmitting(false);
  };

  return (
    <div className="component-page">
      <h1 className="component-title">Spinners</h1>

      <div className="spinner-section">
        <h2>Default UI</h2>

        <div className="spinner-buttons">
          {submitting ? (
            <Button
              variant="primary"
              disabled
              className="submitting-button"
            >
              <Spinner
                animation="border"
                size="sm"
                className="me-2"
              />
              Submitting
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleSubmit}
              className="submit-button"
            >
              Click to Submit
            </Button>
          )}

          <Button
            variant={submitting ? "danger" : "outline-danger"}
            onClick={handleCancel}
            className="cancel-button"
          >
            Cancel
          </Button>
        </div>

        {submitting && (
          <p className="spinner-info">
            Clicking the Cancel button will stop the submission process.
          </p>
        )}
      </div>
    </div>
  );
}

export default RBSpinners;