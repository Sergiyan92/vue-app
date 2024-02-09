import axios from "axios";

const axiosInstanse = axios.create({
  baseURL: "https://apt-booking-api.herokuapp.com/",
});

export default axiosInstanse;
