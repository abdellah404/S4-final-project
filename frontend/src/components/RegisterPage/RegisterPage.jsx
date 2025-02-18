import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./RegisterPage.css";
import { axiosClient } from "../../api/axios";

function RegisterPage() {
  const userSchema = Yup.object({
    name: Yup.string().required("first Name is required"),
    email: Yup.string().email().required("email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .required("Password is required"),
    phone: Yup.string()
      .matches(/^0[0-9]{9}$/, "Phone number must have 10 digits")
      .required("Phone number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      name: "ahmed",
      email: "test@gmail.com",
      password: "afhyhefèèRRRR3",
      phone: "0642873965",
      location: "kenitra",
    },
  });

  const onSubmit = async (data) => {
    try {
      data.token = "sb5icMcSTO";
      const resp = await axiosClient.post("api/register", data);
      console.log("Success:", resp);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-4">
            <div className="register-card p-4 border rounded">
              <h2 className="text-center mb-4 font-weight-bold">Register</h2>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Full Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="form-control"
                  placeholder="Enter your firstName"
                  {...register("name")}
                />
                <p className="text-danger mt-1">{errors.name?.message}</p>
              </div>

              {/* email  */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <p className="text-danger mt-1">{errors.email?.message}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Enter your Phone number"
                  {...register("phone")}
                />
                <p className="text-danger mt-1">{errors.phone?.message}</p>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <p className="text-danger mt-1">{errors.password?.message}</p>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Register
              </button>
              <p className="mt-4 text-center">
                Already a member?{" "}
                <a href="/app/login" className="text-primary">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterPage;
