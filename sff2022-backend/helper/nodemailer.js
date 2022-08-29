const { transporter } =  require("../config/mailer");

// https://www.youtube.com/watch?v=KjheexBLY4A&ab_channel=DominiCode
// https://nodemailer.com/about/

const sendMail = async (htmlbody,emailSubject,plainTxt,emailAddress) => {
    try {
        let info = await transporter.sendMail({
            from: '"Sales Force Fest 2022👻" <no-reply@salesforcefest.com>', // sender address
            to: emailAddress, // list of receivers
            subject: emailSubject, // Subject line
            text: plainTxt, // plain text body
            html: htmlbody, // html body
        });
    }catch(err){
        console.log(err);
    }
}

module.exports={
    sendMail
}