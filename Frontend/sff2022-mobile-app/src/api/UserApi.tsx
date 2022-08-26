import axios from "axios";
const baseURL = 'https://sff-testing.herokuapp.com/api';
export const userAPI = axios.create({baseURL});