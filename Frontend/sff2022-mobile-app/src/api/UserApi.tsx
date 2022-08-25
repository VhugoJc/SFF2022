import axios from "axios";
const baseURL = 'http://192.168.0.10:5000/api';
export const userAPI = axios.create({baseURL});