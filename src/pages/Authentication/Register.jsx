import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/Shared/SocialLogin";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password, name, photoURL } = data;
    try {
      await createUser(email, password);
      await updateUserProfile(name, photoURL);
      toast.success(`Welcome, ${name}! Your account has been created.`);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-black text-center text-gradient mb-10">
          Register your account
        </h1>

        <div className="hero">
          <div className="card shrink-0 w-full max-w-sm shadow-lg bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text mb-2">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text mb-2">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  {...register("photoURL", {
                    required: "Photo URL is required",
                  })}
                />
                {errors.photoURL && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.photoURL.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text mb-2">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text mb-2">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className={`input input-bordered w-full ${
                    errors.password ? "input-error" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[a-z])/,
                      message: "Must have Uppercase & Lowercase letters",
                    },
                  })}
                />
                <span
                  className="absolute right-5 top-11 cursor-pointer z-50 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
                {errors.password && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-gradient text-white w-full hover:scale-105 transition-transform duration-200">
                  Register
                </button>
              </div>
              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="link link-primary font-semibold">
                  Login
                </Link>
              </p>
            </form>

            {/* Google Sign in */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
