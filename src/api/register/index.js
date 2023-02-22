import { post } from "../../utils/server";

export const fetchRegister = async (data) => {
  return await post("/api/signup", data);
};