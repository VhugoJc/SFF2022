import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = 'https://sff-testing.herokuapp.com/api';
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