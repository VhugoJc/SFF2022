interface Products{
    _id:string,
    name:string,
    img:string,
    description:string
}
export interface Presale {
    _id:string,
    name:string,
    cost: number,
    description:string,
    coverImg:string,
    sellerId:string,
    tortas:number,
    products?: Array<Products>
    saleDate?:Date
}
