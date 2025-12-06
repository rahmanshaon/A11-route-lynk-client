import React from "react";
import { useRouteError } from "react-router";

const NotFound = () => {
  const error = useRouteError();
  const message = error?.statusText || error?.message;
  const status = error?.status;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">{status}</h1>
        <p className="text-2xl font-semibold text-red-600 mb-2">{message}</p>
        <p className="text-gray-500 mt-2">
          Something went wrong. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
