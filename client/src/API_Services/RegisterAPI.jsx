import { Base_Url } from "../Base_Url/Base_Url";
import axios from "axios";

export const RegisterUserAPI = async (params) => {
  const url = `${Base_Url}/auth/register`;
  const res = await axios.post(url, params);
  return res;
};
