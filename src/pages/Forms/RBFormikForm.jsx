import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

function FormikForm() {
  const [success, setSuccess] = useState(false);
  const [fileKey, setFileKey] = useState(0);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const initialValues = {
    firstName: "Saba",
    lastName: "Sagir",
    username: "saba123",
    city: "Motihari",
    state: "Bihar",
    zip: "845401",
    file: null,
    terms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z ]+$/, "Only letters are allowed")
      .required("First name is required"),

    lastName: Yup.string()
      .matches(/^[A-Za-z ]+$/, "Only letters are allowed")
      .required("Last name is required"),

    username: Yup.string()
      .min(3, "Minimum 3 characters required")
      .max(15, "Maximum 15 characters allowed")
      .required("Username is required"),

    city: Yup.string()
      .required("City is required"),

    state: Yup.string()
      .required("State is required"),

    zip: Yup.string()
      .matches(/^[0-9]{6}$/, "Enter exactly 6 digits")
      .required("Zip is required"),

    file: Yup.mixed()
      .required("Please select a file")
      .test(
        "fileSize",
        "File size must be less than 5 MB",
        (value) => value && value.size <= 5 * 1024 * 1024
      ),

    terms: Yup.boolean()
      .oneOf([true], "Please accept terms and conditions"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const submittedData = {
      ...values,
      file: values.file ? values.file.name : null,
    };

    console.log("Submitted Data:", submittedData);

    resetForm({
      values: {
        firstName: "",
        lastName: "",
        username: "",
        city: "",
        state: "",
        zip: "",
        file: null,
        terms: false,
      },
    });

    setFileKey((prev) => prev + 1);
    setSuccess(true);
  };

  return (
    <div className="container-fluid form-page">

      {/* Success Notification */}
      {success && (
        <div className="success-toast">
          <div className="toast-content">

            <span className="success-icon">✓</span>

            <span className="success-text">
              Registration Successful!
            </span>

            <button
              type="button"
              className="close-toast"
              onClick={() => setSuccess(false)}
            >
              ×
            </button>

          </div>

          <div className="progress-track">
            <div className="progress-fill"></div>
          </div>
        </div>
      )}

      <div className="row">

        {/* Empty Left Sidebar */}
        <div className="col-md-2 sidebar"></div>

        {/* Right Main Section */}
        <div className="col-md-10 main-content">

          <h3 className="main-heading">
            React Bootstrap With Formik Forms Validation using Yup
          </h3>

          <div className="form-container">

            <h4 className="form-title">
              Formik Form Validation
            </h4>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form>

                  {/* First Row */}
                  <div className="row">

                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        First name
                      </label>

                      <Field
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                      />

                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        Last name
                      </label>

                      <Field
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                      />

                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        Username
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">@</span>

                        <Field
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>

                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                  </div>

                  {/* Second Row */}
                  <div className="row">

                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        City
                      </label>

                      <Field
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="City"
                      />

                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="col-md-3 mb-3">
                      <label className="form-label">
                        State
                      </label>

                      <Field
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="State"
                      />

                      <ErrorMessage
                        name="state"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="col-md-3 mb-3">
                      <label className="form-label">
                        Zip
                      </label>

                      <Field
                        type="text"
                        name="zip"
                        className="form-control"
                        placeholder="Zip"
                      />

                      <ErrorMessage
                        name="zip"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                  </div>

                  {/* File Upload */}
                  <div className="mb-3">
                    <label className="form-label">
                      File
                    </label>

                    <input
                      key={fileKey}
                      type="file"
                      className="form-control"
                      onChange={(event) => {
                        setFieldValue(
                          "file",
                          event.currentTarget.files[0] || null
                        );
                      }}
                    />

                    <ErrorMessage
                      name="file"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-3">
                    <div className="form-check">

                      <Field
                        type="checkbox"
                        name="terms"
                        className="form-check-input"
                        id="terms"
                      />

                      <label
                        className="form-check-label"
                        htmlFor="terms"
                      >
                        Agree to terms and conditions
                      </label>

                    </div>

                    <ErrorMessage
                      name="terms"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                  >
                    Submit form
                  </button>

                </Form>
              )}
            </Formik>

          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`

        .form-page {
          min-height: 100vh;
          background: #ffffff;
          padding: 0;
        }

        .sidebar {
          min-height: 100vh;
          background: #f8f9fa;
          border-right: 1px solid #eeeeee;
        }

        .main-content {
          padding: 30px 35px;
        }

        .main-heading {
          color: #0d6efd;
          font-size: 26px;
          font-weight: 500;
          margin-bottom: 35px;
        }

        .form-container {
          width: 100%;
          max-width: 100%;
        }

        .form-title {
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 25px;
          color: #333333;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .form-control {
          height: 42px;
          border-radius: 6px;
          font-size: 14px;
        }

        .input-group-text {
          background: #f8f9fa;
        }

        .form-check {
          margin-top: 5px;
        }

        .submit-btn {
          padding: 9px 18px;
          font-size: 14px;
        }

        /* Success Notification */

        .success-toast {
          position: fixed;
          top: 20px;
          right: 25px;
          width: 390px;
          max-width: calc(100vw - 30px);
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.18);
          z-index: 9999;
          overflow: hidden;
          animation: slideIn 0.4s ease;
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
        }

        .success-icon {
          width: 42px;
          height: 42px;
          background: #28a745;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 27px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .success-text {
          font-size: 20px;
          color: #555555;
          flex: 1;
        }

        .close-toast {
          border: none;
          background: transparent;
          color: #777777;
          font-size: 27px;
          cursor: pointer;
        }

        .progress-track {
          height: 5px;
          width: 100%;
          background: #d4edda;
        }

        .progress-fill {
          height: 100%;
          width: 100%;
          background: #28a745;
          transform-origin: left;
          animation: progress 4s linear forwards;
        }

        @keyframes progress {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile Layout */

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }

          .main-content {
            padding: 20px 15px;
          }

          .main-heading {
            font-size: 21px;
          }

          .form-title {
            font-size: 19px;
          }

          .success-toast {
            right: 15px;
            top: 15px;
          }

          .success-text {
            font-size: 17px;
          }
        }

      `}</style>

    </div>
  );
}

export default FormikForm;