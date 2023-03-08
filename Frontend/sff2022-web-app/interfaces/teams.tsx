interface SocialMedia{
    facebook:String,
    whatsapp: String,
    tiktok:String,
    instagram: String
}

export interface Team{
    name: String | undefined,
    imgs: Array<String| undefined> | any,
    description: String,
    socialMedia: any,

}