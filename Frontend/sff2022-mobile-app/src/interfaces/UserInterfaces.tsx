export interface LoginData {
    email: string,
    password: string
}

export interface User {
    name: string;
    lastname: string;
    email: string;
    role: string;
    status: boolean;
    _uid: string;
}

export interface loginResponse {
    user: User,
    isLogged: boolean,
    token: string
}


export interface NewUser {
    name: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
}

interface ErrorUser {
    status?: number;
    code?: number;
}

export interface SocialMediaInterface{
    facebook:string,
    instagram:string,
    tiktok:string,
    twitter:string
}
export interface ProductData{
    _id:string,
    amount:number,
    category:string,
    description:string,
    img:string,
    name:string
}
export interface TeamData{
    __v:number,
    _id:string,
    description:string,
    imgs:Array<string>,
    logo:string,
    name:string,
    status:boolean,
    socialMedia:SocialMediaInterface
}

export interface PresaleData{
    _id:string,
    cost:number,
    coverImg:string,
    description:string,
    products:Array<ProductData>,
    sellerId:string,
    name:string,
}

export interface PresaleDataSale{
    presaleId:string,
    userId:string | undefined,
    amount:number,
}