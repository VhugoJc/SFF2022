
 const passwordRecoveryHtml = (name,link) => {
    return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
      <style>
        table,
        td,
        div,
        h1,
        p {
          font-family: Arial, sans-serif;
        }
      </style>
    </head>
    
    <body style="margin:0;padding:0;">
      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
        <tr>
          <td align="center" style="padding:0;">
            <table role="presentation"
              style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
              <tr>
                <td align="center" style="padding:40px 0 30px 0;background:#70bbd9;">
                  <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;color:#ffffff;">
                    Reestablecimiento de contraseña
                  </h1>
                  <img
                    src="https://user-images.githubusercontent.com/49222186/110210369-58458c80-7eb7-11eb-9d6e-2129358b3098.png"
                    alt="" width="300" style="height:auto;display:block;" />
    
                </td>
              </tr>
              <tr>
                <td style="padding:36px 30px 42px 30px;">
                  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                    <tr>
                      <td style="padding:0 0 36px 0;color:#153643;">
                        <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Hola ${name} ✌️, </h1>
                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Hemos
                          recibido la petición para recuperar tu contraseña. <b>Para recuperarla por favor da click en el
                            siguiente enlace: </b></p>
                        <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a
                            href="${link}" style="color:#ee4c50;text-decoration:underline;">Link</a></p>
                        <br />
                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Si no
                          solicitaste cambiar tu contraseña, ignora este mensaje.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:30px;background:#ee4c50;">
                        <table role="presentation"
                          style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                          <tr>
                            <td style="padding:0;width:50%;" align="left">
                              <p
                                style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                &reg; Sales Force Fest 2022<br />
                              </p>
                            </td>
                            <td style="padding:0;width:50%;" align="right">
                              <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                <tr>
                                  <td style="padding:0 0 0 10px;width:38px;">
                                    <a href="https://www.facebook.com/SalesForceF" style="color:#ffffff;"><img
                                        src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38"
                                        style="height:auto;display:block;border:0;" /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
    </body>
    
    </html>    
    `
}

 const passwordRecoveryPlaineTxt = (name,link) => {
    return `
    Reestablecimiento de contraseña.
    Hola ${name}✌️,
    Hemos recibido la petición para recuperar tu contraseña. Para recuperarla por favor da click en el siguiente enlace:
    ${link}
    Si no solicitaste cambiar tu contraseña, ignora este mensaje.
    `
}


module.exports={
  passwordRecoveryHtml,
  passwordRecoveryPlaineTxt
}