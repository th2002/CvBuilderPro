import { API_CV } from "../../API/api";
const axios = require("axios");

async function getUserbyId() {
  const res = await axios.get(API_CV)
  const dataCv = res.data
  
  return dataCv
}

export default getUserbyId