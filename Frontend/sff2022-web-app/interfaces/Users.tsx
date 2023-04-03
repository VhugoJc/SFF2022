export interface SellerForm {
    _uid?: string,
    name: string,
    lastname: string,
    email: string,
    password: string,
    confirm: string,
    team:String
}

export interface Seller {
    name: string,
    lastname: string,
    email: string,
    role: string,
    status: boolean,
    _uid: string,
    team:String

}
export interface User {
    name: string,
    lastname: string,
    email: string,
    role: string,
    status: boolean,
    _uid: string,
}