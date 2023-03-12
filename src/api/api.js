import axios from "axios";
/*axios instance :oluşturulmuş yeni bir obje*/
const api = axios.create({
  baseURL: "http://localhost:3004",
});

export default api;
