import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

// Save user data to MongoDB
export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    image: user.photoURL,
    role: "user",
    status: "verified",
  };

  const { data } = await axiosPublic.put(`/user/${user.email}`, currentUser);
  return data;
};
