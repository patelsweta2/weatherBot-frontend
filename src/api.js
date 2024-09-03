import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;

axios.defaults.withCredentials = true;

const fetchServer = async (endpoint, method = "get", body) => {
  try {
    const options = {
      method,
      url: `${URL}${endpoint}`,
      data: body,
    };
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export default fetchServer;
