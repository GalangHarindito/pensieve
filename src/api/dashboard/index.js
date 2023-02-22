import { get } from "../../utils/server";
import axios from "axios";


export const fetchDashboard = async (accessToken) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return await get("/api");
};