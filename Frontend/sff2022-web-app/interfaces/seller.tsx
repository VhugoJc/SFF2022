export interface SellerForm {
    name: string,
    lastname: string,
    email: string,
    password: string,
    confirm: string
}

export interface Seller {
    name: string,
    lastname: string,
    email: string,
    role: string,
    status: boolean,
    _id: string,

}