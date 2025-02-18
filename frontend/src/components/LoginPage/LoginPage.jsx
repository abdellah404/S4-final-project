import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosClient } from "../../api/axios";
import axios from "axios";

function LoginPage() {
  const userSchema = Yup.object({
    email: Yup.string().email().required("email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .required("Password is required"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      email: "test@gmail.com",
      password: "afhyhe88OpRRRR3",
    },
  });

  const onSubmit = async (data) => {
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios
        .post("http://localhost:8000/register", data, {
          headers: {
            Authorization: "Bearer sb5icMcSTO",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("User registered:", response.data);
        });
    });
  };

  return (
    <form action="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-card p-4 border rounded">
              <h2 className="text-center mb-4 font-weight-bold">Login</h2>
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
                {/*Step 2: Task 6*/}
                <span
                  style={{
                    color: "red",
                    height: ".5cm",
                    display: "block",
                    fontStyle: "italic",
                    fontSize: "12px",
                  }}
                ></span>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Login
              </button>
              <p className="mt-4 text-center">
                New here?{" "}
                <a href="/app/register" className="text-primary">
                  Register Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
