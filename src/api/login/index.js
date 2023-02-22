import { post } from "../../utils/server";
import axios from "axios";
import {encode as base64_encode} from 'base-64';

export const fetchLogin = async (data) => {
    const {user_name, password} = data
  axios.defaults.headers.common["Authorization"] = `Basic ${base64_encode(`${user_name}:${password}`)}`;
  return await post("/api/login", data);
};
