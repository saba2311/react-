import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RBBasicFormControls() {

  // Default Values
  const initialValues = {
    firstName: "Saba",
    lastName: "Sagir",
    phone: "9876543210",
    email: "saba@gmail.com",
    country: "India",
    state: "Bihar",
    city: "Motihari",
    address: "Motihari, Bihar, India",
    zipCode: "845401",
    favoriteColor: "#000000",
    joiningDate: "2026-01-15",
    age: 22,
    gender: "Female",
    hobbies: ["Drawing", "Singing"],
    resume: null,
    terms: false
  };

  // Blank Values
  const emptyValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    favoriteColor: "#000000",
    joiningDate: "",
    age: 30,
    gender: "",
    hobbies: [],
    resume: null,
    terms: false
  };

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileKey, setFileKey] = useState(0);

  // Country, State and City Data
  const countryData = {
    India: {
      Bihar: ["Motihari", "Patna", "Muzaffarpur", "Gaya"],
      Delhi: ["New Delhi", "Dwarka", "Rohini"],
      Gujarat: ["Ahmedabad", "Surat", "Vadodara"]
    },

    USA: {
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Houston", "Dallas"]
    },

    Nepal: {
      Bagmati: ["Kathmandu", "Bhaktapur"],
      Gandaki: ["Pokhara", "Gorkha"]
    }
  };

  // Current Date
  const date = new Date();
  const today =
    date.getFullYear() + "-" +
    String(date.getMonth() + 1).padStart(2, "0") + "-" +
    String(date.getDate()).padStart(2, "0");

  // Handle Change
  const handleChange = (e) => {

    const { name, value, type, checked, files } = e.target;

    if (name === "country") {
      setFormData({
        ...formData,
        country: value,
        state: "",
        city: ""
      });
    }

    else if (name === "state") {
      setFormData({
        ...formData,
        state: value,
        city: ""
      });
    }

    else if (name === "hobbies") {

      let updatedHobbies = [...formData.hobbies];

      if (checked) {
        updatedHobbies.push(value);
      } else {
        updatedHobbies = updatedHobbies.filter(
          (hobby) => hobby !== value
        );
      }

      setFormData({
        ...formData,
        hobbies: updatedHobbies
      });
    }

    else if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked
      });
    }

    else if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0] || null
      });
    }

    else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      ...(name === "country" ? { state: "", city: "" } : {}),
      ...(name === "state" ? { city: "" } : {})
    }));

    setSuccess(false);
  };

  // Validation
  const validateForm = () => {

    let newErrors = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[a-zA-Z ]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "Only letters are allowed";
    }

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[a-zA-Z ]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Only letters are allowed";
    }

    // Phone
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    // Country
    if (!formData.country) {
      newErrors.country = "Please select country";
    }

    // State
    if (!formData.state) {
      newErrors.state = "Please select state";
    }

    // City
    if (!formData.city) {
      newErrors.city = "Please select city";
    }

    // Address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (formData.address.trim().length < 10) {
      newErrors.address = "Minimum 10 characters required";
    }

    // Zip Code
    if (!/^\d{6}$/.test(formData.zipCode)) {
      newErrors.zipCode = "Enter valid 6 digit PIN code";
    }

    // Favourite Color
    if (!formData.favoriteColor) {
      newErrors.favoriteColor = "Select favourite color";
    }

    // Joining Date
    if (!formData.joiningDate) {
      newErrors.joiningDate = "Joining date is required";
    } else if (formData.joiningDate >= today) {
      newErrors.joiningDate = "Date must be before today";
    }

    // Age
    if (Number(formData.age) < 18 || Number(formData.age) > 60) {
      newErrors.age = "Age must be between 18 and 60";
    }

    // Gender
    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    // Hobbies
    if (formData.hobbies.length < 1) {
      newErrors.hobbies = "Select at least one hobby";
    }

    // Resume
    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    } else {

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];

      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = "Only PDF, DOC and DOCX allowed";
      } else if (formData.resume.size > 8 * 1024 * 1024) {
        newErrors.resume = "Maximum file size is 8MB";
      }
    }

    // Terms
    if (!formData.terms) {
      newErrors.terms = "Please accept terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = (e) => {

    e.preventDefault();

    setSuccess(false);
    setSubmittedData(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const finalData = {
      ...formData,
      age: Number(formData.age),
      resume: formData.resume.name
    };

    console.log(
      "Registration Data:",
      JSON.stringify(finalData, null, 2)
    );

    setTimeout(() => {

      setSubmittedData(finalData);

      setSuccess(true);

      // Reset Form with Blank Values
      setFormData(emptyValues);

      setErrors({});

      // Clear File Input
      setFileKey((prev) => prev + 1);

      setLoading(false);

    }, 1500);
  };

  return (

    <div className="container-fluid py-4">

      <div className="row">

        {/* Left Side Heading */}
        <div className="col-md-2 border-end text-center">

          <h3 className="fw-bold text-secondary">
            Basic Form Controls
          </h3>

        </div>

        {/* Right Side Form */}
        <div className="col-md-10 px-4">

          {/* Successful Message */}
          {success && (

            <div className="alert alert-success d-flex justify-content-between align-items-center">

              <strong>
                <i className="bi bi-check-circle-fill me-2"></i>
                Registration Successfully!
              </strong>

              <button
                type="button"
                className="btn-close"
                onClick={() => setSuccess(false)}
              ></button>

            </div>

          )}

          <h5 className="mb-4">
            Registration Details (RB Basic Form Controls)
          </h5>

          <form onSubmit={handleSubmit}>

            <fieldset disabled={loading}>

              <div className="row">

                {/* First Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">First name</label>

                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                  />

                  <small className="text-danger">
                    {errors.firstName}
                  </small>
                </div>

                {/* Last Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last name</label>

                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                  />

                  <small className="text-danger">
                    {errors.lastName}
                  </small>
                </div>

                {/* Phone Number */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                  />

                  <small className="text-danger">
                    {errors.phone}
                  </small>
                </div>

                {/* Email */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <small className="text-danger">
                    {errors.email}
                  </small>
                </div>

                {/* Country */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Select Country</label>

                  <select
                    name="country"
                    className="form-select"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Nepal">Nepal</option>
                  </select>

                  <small className="text-danger">
                    {errors.country}
                  </small>
                </div>

                {/* State */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Select State</label>

                  <select
                    name="state"
                    className="form-select"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">Select state</option>

                    {Object.keys(
                      countryData[formData.country] || {}
                    ).map((state) => (

                      <option key={state} value={state}>
                        {state}
                      </option>

                    ))}

                  </select>

                  <small className="text-danger">
                    {errors.state}
                  </small>
                </div>

                {/* City */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Select City</label>

                  <select
                    name="city"
                    className="form-select"
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <option value="">Select City</option>

                    {(countryData[formData.country]?.[formData.state] || []).map(
                      (city) => (

                        <option key={city} value={city}>
                          {city}
                        </option>

                      )
                    )}

                  </select>

                  <small className="text-danger">
                    {errors.city}
                  </small>
                </div>

                {/* Zip Code */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Zip/Pin Code</label>

                  <input
                    type="text"
                    name="zipCode"
                    className="form-control"
                    value={formData.zipCode}
                    onChange={handleChange}
                    maxLength="6"
                  />

                  <small className="text-danger">
                    {errors.zipCode}
                  </small>
                </div>

                {/* Address */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Your Address</label>

                  <textarea
                    name="address"
                    className="form-control"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>

                  <small className="text-danger">
                    {errors.address}
                  </small>
                </div>

                {/* Favourite Color */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Favourite Color</label>

                  <input
                    type="color"
                    name="favoriteColor"
                    className="form-control form-control-color d-block"
                    value={formData.favoriteColor}
                    onChange={handleChange}
                  />

                  <small className="text-danger">
                    {errors.favoriteColor}
                  </small>
                </div>

                {/* Joining Date */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Joining Date</label>

                  <input
                    type="date"
                    name="joiningDate"
                    className="form-control"
                    max={today}
                    value={formData.joiningDate}
                    onChange={handleChange}
                  />

                  <small className="text-danger">
                    {errors.joiningDate}
                  </small>
                </div>

                {/* Age */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Age: {formData.age}
                  </label>

                  <input
                    type="range"
                    name="age"
                    className="form-range"
                    min="18"
                    max="60"
                    value={formData.age}
                    onChange={handleChange}
                  />

                  <small className="text-danger">
                    {errors.age}
                  </small>
                </div>

                {/* Gender */}
                <div className="col-md-6 mb-3">

                  <label className="form-label d-block">
                    Gender
                  </label>

                  {["Male", "Female", "Transgender"].map((gender) => (

                    <div
                      className="form-check form-check-inline"
                      key={gender}
                    >

                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={handleChange}
                      />

                      <label className="form-check-label">
                        {gender}
                      </label>

                    </div>

                  ))}

                  <div>
                    <small className="text-danger">
                      {errors.gender}
                    </small>
                  </div>

                </div>

                {/* Hobbies */}
                <div className="col-md-6 mb-3">

                  <label className="form-label d-block">
                    Hobbies
                  </label>

                  {["Drawing", "Singing", "Dancing"].map((hobby) => (

                    <div
                      className="form-check form-check-inline"
                      key={hobby}
                    >

                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="hobbies"
                        value={hobby}
                        checked={formData.hobbies.includes(hobby)}
                        onChange={handleChange}
                      />

                      <label className="form-check-label">
                        {hobby}
                      </label>

                    </div>

                  ))}

                  <div>
                    <small className="text-danger">
                      {errors.hobbies}
                    </small>
                  </div>

                </div>

                {/* Resume */}
                <div className="col-md-12 mb-3">

                  <label className="form-label">Resume</label>

                  <input
                    key={fileKey}
                    type="file"
                    name="resume"
                    className="form-control"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                  />

                  <small className="text-danger">
                    {errors.resume}
                  </small>

                </div>

                {/* Terms */}
                <div className="col-md-12 mb-3">

                  <div className="form-check">

                    <input
                      type="checkbox"
                      name="terms"
                      className="form-check-input"
                      checked={formData.terms}
                      onChange={handleChange}
                    />

                    <label className="form-check-label">
                      Agree to terms and conditions
                    </label>

                  </div>

                  <small className="text-danger">
                    {errors.terms}
                  </small>

                </div>

              </div>

            </fieldset>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit form"}
            </button>

          </form>

          {/* JSON Result */}
          {submittedData && (

            <div className="mt-4">

              <h5 className="text-success">
                Submitted JSON Data
              </h5>

              <pre className="bg-light border rounded p-3">
                {JSON.stringify(submittedData, null, 2)}
              </pre>
            </div>
          )}
        </div>
       </div>
    </div>
  );
}

export default RBBasicFormControls;
