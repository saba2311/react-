import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function RHFForm() {

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
    hobbies: ["Drawing", "Singing"]
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
    hobbies: []
  };

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues
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

  const today = new Date();
  const maxDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  ).toISOString().slice(0, 10);

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
                type="text"
                className="form-control"
                {...register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Only letters are allowed"
                  }
                })}
              />
              <small className="text-danger">{errors.firstName?.message}</small>
            </div>

            {/* Last Name */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Last name</label>
              <input
                type="text"
                className="form-control"
                {...register("lastName", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Only letters are allowed"
                  }
                })}
              />
              <small className="text-danger">{errors.lastName?.message}</small>
            </div>

            {/* Age */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                {...register("age", {
                  required: "Age is required",
                  validate: (value) =>
                    (Number(value) >= 18 && Number(value) <= 40) ||
                    "Age must be between 18 and 40"
                })}
              />
              <small className="text-danger">{errors.age?.message}</small>
            </div>

            {/* Password */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required"
                  },
                  maxLength: {
                    value: 10,
                    message: "Maximum 10 characters allowed"
                  },
                  pattern: {
                    value: /^\S+$/,
                    message: "Spaces are not allowed"
                  }
                })}
              />
              <small className="text-danger">{errors.password?.message}</small>
            </div>

            {/* Phone */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter valid 10 digit phone number"
                  }
                })}
              />
              <small className="text-danger">{errors.phone?.message}</small>
            </div>

            {/* Email */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter valid email address"
                  }
                })}
              />
              <small className="text-danger">{errors.email?.message}</small>
            </div>

            {/* Country */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Select Country</label>
              <select
                className="form-select"
                {...register("country", {
                  required: "Select country"
                })}
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
                {...register("state", {
                  required: "Select state"
                })}
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
                {...register("preferredCities", {
                  validate: (value) =>
                    value.length >= 2 || "Select minimum two cities"
                })}
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
                {...register("address", {
                  required: "Address is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters required"
                  }
                })}
              />
              <small className="text-danger">{errors.address?.message}</small>
            </div>

            {/* Zip Code */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Zip/Pin Code</label>
              <input
                type="text"
                className="form-control"
                {...register("zipCode", {
                  required: "Zip code is required",
                  pattern: {
                    value: /^\d{6}$/,
                    message: "Enter valid 6 digit PIN code"
                  }
                })}
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
                {...register("joiningDate", {
                  required: "Joining date is required",
                  validate: (value) =>
                    value < maxDate || "Date must be before today"
                })}
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
                    {...register("gender", {
                      required: "Select gender"
                    })}
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
                    {...register("hobbies", {
                      validate: (value) =>
                        value.length >= 2 || "Select minimum two hobbies"
                    })}
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
                {...register("profilePicture", {
                  validate: {
                    required: (files) =>
                      files?.length > 0 || "Profile picture is required",
                    type: (files) =>
                      !files?.[0] ||
                      ["image/jpeg", "image/png", "image/gif"].includes(files[0].type) ||
                      "Only JPG, PNG and GIF allowed",
                    size: (files) =>
                      !files?.[0] ||
                      files[0].size <= 6 * 1024 * 1024 ||
                      "Maximum file size is 6MB"
                  }
                })}
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
                {...register("resume", {
                  validate: {
                    required: (files) =>
                      files?.length > 0 || "Resume is required",
                    type: (files) =>
                      !files?.[0] ||
                      [
                        "application/pdf",
                        "application/msword",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      ].includes(files[0].type) ||
                      "Only PDF or Word document allowed",
                    size: (files) =>
                      !files?.[0] ||
                      files[0].size <= 8 * 1024 * 1024 ||
                      "Maximum file size is 8MB"
                  }
                })}
              />
              <small className="text-danger">
                {errors.resume?.message}
              </small>
            </div>

            {/* Terms */}
            <div className="col-12 mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  {...register("terms", {
                    required: "Please accept terms and conditions"
                  })}
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

export default RHFForm;