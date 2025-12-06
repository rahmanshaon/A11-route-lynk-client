import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SocialLogin from "../../components/Shared/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Login Successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gradient mb-10">
          Login your account
        </h2>

        <div className="hero">
          <div className="card shrink-0 w-full max-w-sm shadow-lg bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
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
                  Login
                </button>
              </div>
              <p className="text-center mt-4">
                New to RouteLynk?{" "}
                <Link
                  to="/register"
                  state={location.state}
                  className="link link-primary font-semibold"
                >
                  Create an account
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

export default Login;
