import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID v4nbjHc9lefcwzPPCkzPs_G-PN9wrKbs9OFFtD8tj4M",
  },
});
