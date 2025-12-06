import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = async () => {
    try {
      console.log("SocialLogin: Attempting Google Sign-in...");
      const result = await googleSignIn();
      console.log("SocialLogin: Success", result.user);

      //  toast.success("Login Successful!");
      toast.success(`Welcome, ${result.user.displayName}!`);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("SocialLogin: Error", error);
      toast.error("Google Sign-In failed.");
    }
  };

  return (
    <>
      <div className="divider px-8">OR</div>
      <div className="px-8 pb-8">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="btn btn-outline btn-primary w-full"
        >
          <FaGoogle /> Continue with Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
