import axios from "axios";
const baseURL = 'https://sff-testing.herokuapp.com/';
export const userAPI = axios.create({baseURL});