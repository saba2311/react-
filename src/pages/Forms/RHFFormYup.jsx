import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Current date
const today = new Date();
const maxDate = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().slice(0, 10);

// Validation Schema
const schema = yup.object({

  firstName: yup.string()
    .required("First name is required")
    .matches(/^[a-zA-Z ]+$/, "Only letters are allowed"),

  lastName: yup.string()
    .required("Last name is required")
    .matches(/^[a-zA-Z ]+$/, "Only letters are allowed"),

  age: yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Age is required")
    .required("Age is required")
    .min(18, "Minimum age is 18")
    .max(40, "Maximum age is 40"),

  password: yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters required")
    .max(10, "Maximum 10 characters allowed")
    .matches(/^\S+$/, "Spaces are not allowed"),

  phone: yup.string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Enter valid 10 digit phone number"),

  email: yup.string()
    .required("Email is required")
    .email("Enter valid email address"),

  country: yup.string()
    .required("Select country"),

  state: yup.string()
    .required("Select state"),

  preferredCities: yup.array()
    .of(yup.string())
    .min(2, "Select minimum two cities")
    .required("Cities are required"),

  address: yup.string()
    .required("Address is required")
    .min(10, "Minimum 10 characters required"),

  zipCode: yup.string()
    .required("Zip code is required")
    .matches(/^\d{6}$/, "Enter valid 6 digit PIN code"),

  joiningDate: yup.string()
    .required("Joining date is required")
    .test(
      "past-date",
      "Date must be before today",
      (value) => value && value < maxDate
    ),

  gender: yup.string()
    .required("Select gender"),

  hobbies: yup.array()
    .of(yup.string())
    .min(2, "Select minimum two hobbies")
    .required("Hobbies are required"),

  profilePicture: yup.mixed()
    .test(
      "required",
      "Profile picture is required",
      (value) => value && value.length > 0
    )
    .test(
      "fileType",
      "Only JPG, PNG and GIF allowed",
      (value) => {
        if (!value || !value[0]) return true;
        return [
          "image/jpeg",
          "image/png",
          "image/gif"
        ].includes(value[0].type);
      }
    )
    .test(
      "fileSize",
      "Maximum file size is 6MB",
      (value) => !value || !value[0] ||
        value[0].size <= 6 * 1024 * 1024
    ),

  resume: yup.mixed()
    .test(
      "required",
      "Resume is required",
      (value) => value && value.length > 0
    )
    .test(
      "fileType",
      "Only PDF or Word document allowed",
      (value) => {
        if (!value || !value[0]) return true;
        return [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ].includes(value[0].type);
      }
    )
    .test(
      "fileSize",
      "Maximum file size is 8MB",
      (value) => !value || !value[0] ||
        value[0].size <= 8 * 1024 * 1024
    ),

  terms: yup.boolean()
    .oneOf([true], "Please accept terms and conditions")
    .required("Please accept terms and conditions")

});

function RHFFormYup() {

  const defaultValues = {
    firstName: "Saba",
    lastName: "Sagir",
    age: "22",
    password: "Saba123",
    phone: "9876543210",
    email: "saba@gmail.com",
    country: "India",
    state: "Gujarat",
    preferredCities: ["Ahmedabad", "Somnath"],
    address: "Motihari, Bihar",
    zipCode: "845401",
    joiningDate: "2026-01-15",
    gender: "Female",
    hobbies: ["Drawing", "Singing"],
    terms: false
  };

  const emptyValues = {
    firstName: "",
    lastName: "",
    age: "",
    password: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    preferredCities: [],
    address: "",
    zipCode: "",
    joiningDate: "",
    gender: "",
    hobbies: [],
    profilePicture: undefined,
    resume: undefined,
    terms: false
  };

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  });

  const country = watch("country");

  const states = {
    India: ["Gujarat", "Bihar", "Delhi"],
    USA: ["California", "Texas"],
    Nepal: ["Bagmati", "Gandaki"]
  };

  const cities = {
    India: ["Ahmedabad", "Delhi", "Somnath", "Patna", "Motihari"],
    USA: ["Los Angeles", "Houston", "Dallas"],
    Nepal: ["Kathmandu", "Pokhara"]
  };

  const onSubmit = async (data) => {

    setLoading(true);

    const finalData = {
      ...data,
      age: Number(data.age),
      profilePicture: data.profilePicture[0].name,
      resume: data.resume[0].name
    };

    console.log("Submitted Data:", JSON.stringify(finalData, null, 2));

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Registration Successful!");

    reset(emptyValues);
    setLoading(false);
  };

  const onError = () => {
    toast.error("Please fill all fields correctly!");
  };

  return (
    <div className="container my-4">

      <ToastContainer position="top-right" />

      <h4 className="mb-4">Registration Details</h4>

      <form onSubmit={handleSubmit(onSubmit, onError)}>

        <fieldset disabled={loading}>

          <div className="row">

            {/* First Name */}
            <div className="col-md-6 mb-3">
              <label className="form-label">First name</label>
              <input
                className="form-control"
                {...register("firstName")}
              />
              <small className="text-danger">{errors.firstName?.message}</small>
            </div>

            {/* Last Name */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Last name</label>
              <input
                className="form-control"
                {...register("lastName")}
              />
              <small className="text-danger">{errors.lastName?.message}</small>
            </div>

            {/* Age */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                {...register("age")}
              />
              <small className="text-danger">{errors.age?.message}</small>
            </div>

            {/* Password */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password")}
              />
              <small className="text-danger">{errors.password?.message}</small>
            </div>

            {/* Phone */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                {...register("phone")}
              />
              <small className="text-danger">{errors.phone?.message}</small>
            </div>

            {/* Email */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                {...register("email")}
              />
              <small className="text-danger">{errors.email?.message}</small>
            </div>

            {/* Country */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Select Country</label>
              <select
                className="form-select"
                {...register("country")}
              >
                <option value="">Select country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Nepal">Nepal</option>
              </select>
              <small className="text-danger">{errors.country?.message}</small>
            </div>

            {/* State */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Select State</label>
              <select
                className="form-select"
                {...register("state")}
              >
                <option value="">Select state</option>
                {(states[country] || []).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <small className="text-danger">{errors.state?.message}</small>
            </div>

            {/* Preferred Cities */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Select Preferred Cities</label>
              <select
                multiple
                className="form-select"
                style={{ height: "110px" }}
                {...register("preferredCities")}
              >
                {(cities[country] || []).map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <small className="text-danger">
                {errors.preferredCities?.message}
              </small>
              <div className="form-text">Hold Ctrl to select multiple cities.</div>
            </div>

            {/* Address */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Your Complete Address</label>
              <textarea
                className="form-control"
                rows="4"
                {...register("address")}
              />
              <small className="text-danger">{errors.address?.message}</small>
            </div>

            {/* Zip Code */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Zip/Pin Code</label>
              <input
                className="form-control"
                {...register("zipCode")}
              />
              <small className="text-danger">{errors.zipCode?.message}</small>
            </div>

            {/* Joining Date */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Joining Date</label>
              <input
                type="date"
                max={maxDate}
                className="form-control"
                {...register("joiningDate")}
              />
              <small className="text-danger">
                {errors.joiningDate?.message}
              </small>
            </div>

            {/* Gender */}
            <div className="col-md-6 mb-3">
              <label className="form-label d-block">Gender</label>

              {["Male", "Female", "Transgender"].map((gender) => (
                <div className="form-check form-check-inline" key={gender}>
                  <input
                    type="radio"
                    className="form-check-input"
                    value={gender}
                    {...register("gender")}
                  />
                  <label className="form-check-label">{gender}</label>
                </div>
              ))}

              <div>
                <small className="text-danger">{errors.gender?.message}</small>
              </div>
            </div>

            {/* Hobbies */}
            <div className="col-md-6 mb-3">
              <label className="form-label d-block">Hobbies</label>

              {["Drawing", "Singing", "Dancing"].map((hobby) => (
                <div className="form-check form-check-inline" key={hobby}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={hobby}
                    {...register("hobbies")}
                  />
                  <label className="form-check-label">{hobby}</label>
                </div>
              ))}

              <div>
                <small className="text-danger">{errors.hobbies?.message}</small>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Profile Picture</label>
              <input
                type="file"
                className="form-control"
                accept=".jpg,.jpeg,.png,.gif"
                {...register("profilePicture")}
              />
              <small className="text-danger">
                {errors.profilePicture?.message}
              </small>
            </div>

            {/* Resume */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Resume</label>
              <input
                type="file"
                className="form-control"
                accept=".pdf,.doc,.docx"
                {...register("resume")}
              />
              <small className="text-danger">{errors.resume?.message}</small>
            </div>

            {/* Terms */}
            <div className="col-12 mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  {...register("terms")}
                />
                <label className="form-check-label">
                  Agree to terms and conditions
                </label>
              </div>
              <small className="text-danger">{errors.terms?.message}</small>
            </div>

          </div>

        </fieldset>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit form"}
        </button>

        {loading && (
          <span className="ms-3 text-primary">
            Please wait...
          </span>
        )}

      </form>
    </div>
  );
}

export default RHFFormYup;