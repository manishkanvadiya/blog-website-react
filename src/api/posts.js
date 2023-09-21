import axios from "axios";
const dev = "http://localhost:3500";
const prod = "https://json-server-app-kphd.onrender.com";
export default axios.create({
  baseURL: prod,
});
