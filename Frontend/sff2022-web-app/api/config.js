let url = 'http://www.localhost:5001/api';
if (typeof window !== 'undefined') {
    if(window.location.host !== "localhost:3000" && window.location.host !== "www.localhost:3000"){
        url = window.location.protocol + "//" + window.location.host+"/api";
    }
}
export const BASEURL = url; //server address

// develop: http://192.168.0.10:5000/api
// testing: http://192.168.0.10:5000/api