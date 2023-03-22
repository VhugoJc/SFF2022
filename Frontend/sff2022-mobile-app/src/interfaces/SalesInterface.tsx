export interface PreliminarySaleData {
    presale:     Presale;
    totalAmount: number;
    user:        User;
   }
   
   export interface Presale {
    __v?:         number;
    _id:         string;
    cost:        number;
    coverImg:    string;
    description: string;
    name:        string;
    products:    Product[];
    sellerId:    string;
   }
   
   export interface Product {
    _id:         string;
    amount:      number;
    category:    string;
    description: string;
    img:         string;
    name:        string;
   }
   
   export interface User {
    _uid:     string;
    email:    string;
    lastname: string;
    name:     string;
    team:     string;
   }
   