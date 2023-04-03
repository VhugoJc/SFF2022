import { Presale } from "./Presale";
import { Seller, User } from "./Users";
import { Team } from "./teams";

export interface Transaction {
    sale: Presale,
    usr: User,
    seller:Seller,
    team:Team 
}