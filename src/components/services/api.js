import axios from "axios";

export const burguerApi = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: 8 * 1000,
});
