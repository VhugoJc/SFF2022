import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = 'http:/192.168.50.230:5000/api';
//for localhost it needs to be IP address
export const userAPI = axios.create({baseURL});

userAPI.interceptors.request.use(
    async (config)=>{
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers['x-token']=token;
        }
        return config;
    }
);