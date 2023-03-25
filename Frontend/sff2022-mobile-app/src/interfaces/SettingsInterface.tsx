export interface Sponsors{
    _id:string,
    img:string,
    name:string
}
export interface Events{
    _id:string,
    title:string,
    img:string,
    date:string
}
export interface HomeData{
    title:String,
    description:String,
    url:String,
    img:any
}
export interface Settings{
    name: string,
    website:string,
    logo:string,
    date:Date,
    sponsors: Array<Sponsors>,
    events:Array<Events>,
    homeData:HomeData
}