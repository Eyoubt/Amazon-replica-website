import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-cbe34.cloudfunctions.net/api",
  // http://localhost:5001/clone-cbe34/us-central1/api
});

export default instance;
