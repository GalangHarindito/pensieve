import { get } from "../../utils/server";
import axios from "axios";


export const fetchDetailDevice = async (accessToken, id) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return await get(`/api/${id}`);
};