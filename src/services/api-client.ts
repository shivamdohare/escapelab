import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dc6a28807678480aa1cbbf2adf5610c1",
  },
});
