interface SocialMedia{
    facebook:String,
    whatsapp: String,
    tiktok:String,
    instagram: String
}

export interface Team{
    _id?:String,
    name: String | undefined,
    logo: String,
    imgs: Array<String| undefined> | any,
    description: String,
    socialMedia: any,

}
export interface TeamForm{
    _id?:String,
    name: String | undefined,
    logo: String | undefined,
    imgs: Array<String| undefined> | any,
    description: String | undefined,
    facebook:String | undefined,
    whatsapp: String | undefined,
    tiktok:String | undefined,
    instagram: String | undefined

}