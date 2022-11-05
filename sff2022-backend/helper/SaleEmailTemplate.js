const saleEmailTemplateHTML = (userName,cost, description, name, _id, img, team) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <style>
            table, td, div, h1, p {font-family: Arial, sans-serif;}
        </style>
    </head>
    <body style="margin:0;padding:0;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
            <tr>
                <td align="center" style="padding:0;">
                    <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                        <tr>
                            <td align="center" style="padding:40px 0 30px 0;background:#70bbd9;">
                    <h1  style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;color:#ffffff;">
                    Gracias por tu compra
                    </h1>    
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:36px 30px 42px 30px;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                    <tr>
                                        <td style="padding:0 0 36px 0;color:#153643;">
                                            <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Hola ${userName} ✌️, </h1>
                                            <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">
                                            El equipo ${team} agradece tu compra. A continuación la información correspondiente a tu preventa:
                                            </p>
                                            <img src="${img}" alt=""  style="height:100px;display:block;" />
                                            <p>
                                            id: <strong>${_id}</strong>
                                            </p>
                                            <p>
                                            nombre:
                                            <strong>${name}</strong>
                                            </p>
                                            <p>
                                            <strong>
                                            ${description}
                                            </strong>
                                            <p>
                                                total:
                                                <strong>$${cost}</strong>
                                            </p>
                                            </p>
                                            <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:30px;background:#ee4c50;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                    <tr>
                                        <td style="padding:0;width:50%;" align="left">
                                            <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                                &reg; Sales Force Fest 2022<br/>
                                            </p>
                                        </td>
                                        <td style="padding:0;width:50%;" align="right">
                                            <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                                <tr>
                                                    <td style="padding:0 0 0 10px;width:38px;">
                                                        <a href="https://www.facebook.com/SalesForceF" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
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
    `;

    return html;
}

const saleEmailTemplateTxt = (userName,cost, description, name, _id, img, team) => {
    const txt = `
        Hola ${userName} ✌️,
        El equipo ${team}, Agradece tu compra, a continuación la información correspondiente a tu preventa:
        id: ${_id}
        nombre: ${name}
        descripción: ${description}
        total: ${cost}
        `
    return txt;
}

module.exports={
    saleEmailTemplateHTML,
    saleEmailTemplateTxt
}