export interface LoginData{
    email:string,
    password:string
}

export interface User {
    name:     string;
    lastname: string;
    email:    string;
    role:     string;
    status:   boolean;
    _uid:     string;
}

export interface loginResponse{
    user: User,
    isLogged: boolean,
    token: string
}