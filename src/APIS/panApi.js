import axios from "axios";

// ---------- get data from panorbit API---------
export const getProfile = () => {
  return axios.get("https://panorbit.in/api/users.json");
};


