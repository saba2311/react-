import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BasicFormControls() {
  const [loading, setLoading] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      password: "",
      phone: "",
      email: "",
      country: "",
      state: "",
      cities: [],
      address: "",
      zipCode: "",
      joiningDate: "",
      gender: "",
      hobbies: [],
    },
  });

  const selectedCountry = watch("country");

  const countries = {
    India: ["Bihar", "Delhi", "Maharashtra", "Gujarat"],
    USA: ["California", "Texas", "Florida"],
    Canada: ["Ontario", "Quebec", "Alberta"],
  };

  const onSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      console.log("Form Submitted:", data);
      toast.success("Registration submitted successfully!");
      reset();
      setLoading(false);
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ced4da",
    borderRadius: "4px",
    boxSizing: "border-box",
    fontSize: "14px",
    backgroundColor: "white",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    marginBottom: "6px",
    color: "#333",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "4px",
    display: "block",
  };

  const Field = ({ label, name, children }) => (
    <div style={{ minWidth: 0 }}>
      <label style={labelStyle} htmlFor={name}>
        {label}
      </label>
      {children}
      {errors[name] && (
        <span style={errorStyle}>{errors[name].message}</span>
      )}
    </div>
  );

  return (
    <div className="basic-form-page">
      <ToastContainer position="top-right" autoClose={2500} />

      <style>{`
        .basic-form-page {
          padding: 24px;
          background: #f8f9fa;
          min-height: 100vh;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .registration-box {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(240px, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: auto;
          background: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 2px 10px #00000012;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px 16px;
        }

        .form-heading {
          font-size: 23px;
          margin: 0 0 22px;
          color: #343a40;
        }

        .rules-heading {
          font-size: 20px;
          color: #52708f;
          margin: 0 0 12px;
        }

        .rules-list {
          padding-left: 20px;
          line-height: 1.8;
          color: #444;
          font-size: 14px;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .form-submit {
          background: #0d6efd;
          color: white;
          padding: 10px 18px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .form-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        @media (max-width: 760px) {
          .registration-box {
            grid-template-columns: 1fr;
            padding: 16px;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .full-width {
            grid-column: auto;
          }
        }
      `}</style>

      <div className="registration-box">
        <section>
          <h2 className="form-heading">Registration Details</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset
              disabled={loading}
              style={{ border: "none", padding: 0, margin: 0 }}
            >
              <div className="form-grid">
                <Field label="First name" name="firstName">
                  <input
                    id="firstName"
                    style={inputStyle}
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                </Field>

                <Field label="Last name" name="lastName">
                  <input
                    id="lastName"
                    style={inputStyle}
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                </Field>

                <Field label="Age" name="age">
                  <input
                    id="age"
                    type="number"
                    style={inputStyle}
                    {...register("age", {
                      required: "Age is required",
                      valueAsNumber: true,
                      min: { value: 18, message: "Minimum age is 18" },
                      max: { value: 40, message: "Maximum age is 40" },
                    })}
                  />
                </Field>

                <Field label="Password" name="password">
                  <input
                    id="password"
                    type="password"
                    style={inputStyle}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters required",
                      },
                      maxLength: {
                        value: 10,
                        message: "Maximum 10 characters allowed",
                      },
                      pattern: {
                        value: /^\S+$/,
                        message: "Spaces are not allowed",
                      },
                    })}
                  />
                </Field>

                <Field label="Phone Number" name="phone">
                  <input
                    id="phone"
                    type="tel"
                    style={inputStyle}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                  />
                </Field>

                <Field label="Email Address" name="email">
                  <input
                    id="email"
                    type="email"
                    style={inputStyle}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </Field>

                <Field label="Select Country" name="country">
                  <select
                    id="country"
                    style={inputStyle}
                    {...register("country", {
                      required: "Please select a country",
                    })}
                  >
                    <option value="">Select country</option>
                    {Object.keys(countries).map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Select State" name="state">
                  <select
                    id="state"
                    style={inputStyle}
                    {...register("state", {
                      required: "Please select a state",
                    })}
                  >
                    <option value="">Select state</option>
                    {(countries[selectedCountry] || []).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Select Preferred Cities" name="cities">
                  <select
                    id="cities"
                    multiple
                    style={{ ...inputStyle, height: "100px" }}
                    {...register("cities", {
                      validate: (value) =>
                        value.length >= 2 || "Select at least two cities",
                    })}
                  >
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Somnath">Somnath</option>
                    <option value="Patna">Patna</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                  <small>Hold Ctrl to select multiple cities.</small>
                </Field>

                <Field label="Your Complete Address" name="address">
                  <textarea
                    id="address"
                    rows="4"
                    style={inputStyle}
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                </Field>

                <Field label="Zip/Pin Code" name="zipCode">
                  <input
                    id="zipCode"
                    style={inputStyle}
                    {...register("zipCode", {
                      required: "Zip/Pin code is required",
                      pattern: {
                        value: /^[0-9]{6}$/,
                        message: "Enter a valid 6-digit PIN code",
                      },
                    })}
                  />
                </Field>

                <Field label="Joining Date" name="joiningDate">
                  <input
                    id="joiningDate"
                    type="date"
                    max={today}
                    style={inputStyle}
                    {...register("joiningDate", {
                      required: "Joining date is required",
                      validate: (value) =>
                        value < today ||
                        "Joining date must be before today",
                    })}
                  />
                </Field>

                <div>
                  <label style={labelStyle}>Gender</label>
                  {["Male", "Female", "Transgender"].map((gender) => (
                    <label
                      key={gender}
                      style={{
                        marginRight: "12px",
                        fontSize: "13px",
                      }}
                    >
                      <input
                        type="radio"
                        value={gender}
                        {...register("gender", {
                          required: "Please select gender",
                        })}
                      />
                      {" "}{gender}
                    </label>
                  ))}
                  {errors.gender && (
                    <span style={errorStyle}>{errors.gender.message}</span>
                  )}
                </div>

                <div>
                  <label style={labelStyle}>Hobbies</label>
                  {["Drawing", "Singing", "Dancing"].map((hobby) => (
                    <label
                      key={hobby}
                      style={{
                        marginRight: "10px",
                        fontSize: "13px",
                      }}
                    >
                      <input
                        type="checkbox"
                        value={hobby}
                        {...register("hobbies", {
                          validate: (value) =>
                            value.length >= 2 ||
                            "Select at least two hobbies",
                        })}
                      />
                      {" "}{hobby}
                    </label>
                  ))}
                  {errors.hobbies && (
                    <span style={errorStyle}>{errors.hobbies.message}</span>
                  )}
                </div>

                <Field label="Profile Picture" name="profilePicture">
                  <input
                    id="profilePicture"
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif"
                    style={{ ...inputStyle, padding: "7px" }}
                    {...register("profilePicture", {
                      required: "Profile picture is required",
                      validate: {
                        fileType: (files) =>
                          !files[0] ||
                          ["image/jpeg", "image/png", "image/gif"].includes(
                            files[0].type
                          ) ||
                          "Only JPG, PNG or GIF files are allowed",
                        fileSize: (files) =>
                          !files[0] ||
                          files[0].size <= 6 * 1024 * 1024 ||
                          "Maximum file size is 6MB",
                      },
                    })}
                  />
                </Field>

                <Field label="Resume" name="resume">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    style={{ ...inputStyle, padding: "7px" }}
                    {...register("resume", {
                      required: "Resume is required",
                      validate: {
                        fileType: (files) =>
                          !files[0] ||
                          [
                            "application/pdf",
                            "application/msword",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          ].includes(files[0].type) ||
                          "Only PDF or Word documents are allowed",
                        fileSize: (files) =>
                          !files[0] ||
                          files[0].size <= 8 * 1024 * 1024 ||
                          "Maximum file size is 8MB",
                      },
                    })}
                  />
                </Field>

                <div className="full-width">
                  <label style={{ fontSize: "13px" }}>
                    <input
                      type="checkbox"
                      {...register("terms", {
                        required: "Please accept terms and conditions",
                      })}
                    />
                    {" "}Agree to terms and conditions
                  </label>
                  {errors.terms && (
                    <span style={errorStyle}>{errors.terms.message}</span>
                  )}
                </div>

                <div className="full-width">
                  <button
                    type="submit"
                    disabled={loading}
                    className="form-submit"
                  >
                    {loading ? "Submitting..." : "Submit form"}
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>

       
      </div>
    </div>
  );
}

export default BasicFormControls;










// import { useState } from "react";
// import { Form, Row, Col, Button, Card } from "react-bootstrap";

// function BasicFormControls() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     country: "",
//     state: "",
//     city: "",
//     zip: "",
//     address: "",
//     gender: "",
//     hobbies: [],
//     terms: false,
//   });

  
//   const [submittedData, setSubmittedData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value, checked, type } = e.target;
//     if (type === "checkbox" && name === "hobbies") {
//       let updatedHobbies = [...formData.hobbies];
//       if (checked) {
//         updatedHobbies.push(value);
//       } else {
//         updatedHobbies = updatedHobbies.filter((hobby) => hobby !== value);
//       }
//       setFormData({ ...formData, hobbies: updatedHobbies });
//     } else if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     setSubmittedData((prevData) => [...prevData, formData]);
//     console.log(formData);
//     alert("Registration form submitted successfully!");
//   };

//   return (
//     <div className="container py-4">
//       <Card className="shadow-sm">
//         <Card.Body className="p-4">
//           <h3 className="text-primary mb-4">Registration Details</h3>
//           <Form onSubmit={handleSubmit}>
//             <Row>
//               <Col md={6} className="mb-3">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="firstName"
//                   placeholder="Enter first name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Col>
//               <Col md={6} className="mb-3">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="lastName"
//                   placeholder="Enter last name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Col>
//               <Col md={6} className="mb-3">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </Col>
//               <Col md={6} className="mb-3">
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Col>
//               <Col md={6} className="mb-3">
//                 <Form.Label>Select Country</Form.Label>
//                 <Form.Select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select country</option>
//                   <option value="India">India</option>
//                   <option value="Nepal">Nepal</option>
//                   <option value="USA">USA</option>
//                 </Form.Select>
//               </Col>
//               <Col md={6} className="mb-3">
//                 <Form.Label>Select State</Form.Label>
//                 <Form.Select
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select state</option>
//                   <option value="Bihar">Bihar</option>
//                   <option value="Uttar Pradesh">Uttar Pradesh</option>
//                   <option value="Delhi">Delhi</option>
//                 </Form.Select>
//               </Col>
//               <Col md={6} className="mb-3">
//                 <Form.Label>Select City</Form.Label>
//                 <Form.Select
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select city</option>
//                   <option value="Motihari">Motihari</option>
//                   <option value="Patna">Patna</option>
//                   <option value="Delhi">Delhi</option>
//                 </Form.Select>
//               </Col>
//               <Col md={6} className="mb-3">
//                 <Form.Label>Zip/Pin Code</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="zip"
//                   placeholder="Enter pin code"
//                   value={formData.zip}
//                   onChange={handleChange}
//                   required
//                 />
//               </Col>
//               <Col md={12} className="mb-3">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   name="address"
//                   placeholder="Enter your address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </Col>
//               <Col md={6} className="mb-3">
//                 <Form.Label>Gender</Form.Label>
//                 <div>
//                   <Form.Check
//                     inline
//                     type="radio"
//                     label="Male"
//                     name="gender"
//                     value="Male"
//                     checked={formData.gender === "Male"}
//                     onChange={handleChange}
//                     required
//                   />
//                   <Form.Check
//                     inline
//                     type="radio"
//                     label="Female"
//                     name="gender"
//                     value="Female"
//                     checked={formData.gender === "Female"}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </Col>
//               <Col md={6} className="mb-3">
//                 <Form.Label>Hobbies</Form.Label>
//                 <div>
//                   <Form.Check
//                     inline
//                     type="checkbox"
//                     label="Drawing"
//                     name="hobbies"
//                     value="Drawing"
//                     checked={formData.hobbies.includes("Drawing")}
//                     onChange={handleChange}
//                   />
//                   <Form.Check
//                     inline
//                     type="checkbox"
//                     label="Singing"
//                     name="hobbies"
//                     value="Singing"
//                     checked={formData.hobbies.includes("Singing")}
//                     onChange={handleChange}
//                   />
//                   <Form.Check
//                     inline
//                     type="checkbox"
//                     label="Dancing"
//                     name="hobbies"
//                     value="Dancing"
//                     checked={formData.hobbies.includes("Dancing")}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </Col>
//               <Col md={12} className="mb-3">
//                 <Form.Control
//                   type="file"
//                   name="resume"
//                   accept=".pdf,.doc,.docx"
//                 />
//               </Col>
//               <Col md={12} className="mb-3">
//                 <Form.Check
//                   type="checkbox"
//                   name="terms"
//                   label="Agree to terms and conditions"
//                   checked={formData.terms}
//                   onChange={handleChange}
//                   required
//                 />
//               </Col>
//             </Row>
//             <Button variant="primary" type="submit">
//               Submit Form
//             </Button>
//           </Form>

          
//           {submittedData.length > 0 && (
//             <div className="mt-4 pt-3 border-top">
//               <h3 className="text-secondary mb-3">Submitted Data :</h3>
//               <pre className="p-3 bg-light rounded border" style={{ fontSize: "15px" }}>
//                 {JSON.stringify(submittedData, null, 2)}
//               </pre>
//             </div>
//           )}
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default BasicFormControls;





