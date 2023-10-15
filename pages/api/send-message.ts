import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        const { companyName, name, email, phone, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        transporter.verify(async function (error, success) {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'anErrorOccurred' });
            } else {
                console.log('Server is ready to take our messages');
            }
        });

        const emailUsText = `
This email is sent from JRG Foods website contact page
------------------------------------------------------------
Company Name: ${companyName}
Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}
------------------------------------------------------------
会社名: ${companyName}
名前: ${name}
メール: ${email}
電話番号: ${phone}
メッセージ:
${message}
------------------------------------------------------------`;
        const emailThemText = `
${name}様、

いつも弊社にお問い合わせいただき、ありがとうございます。

お世話になっております。お問い合わせいただき、誠にありがとうございます。お問い合わせフォームからいただいたメッセージを確認いたしました。

お客様のお問い合わせについて、弊社の担当者ができるだけ早くご返信させていただきます。お待たせいたしませんよう、最善の努力をいたします。

お時間を割いてお問い合わせいただき、誠にありがとうございます。どうぞよろしくお願いいたします。

よろしくお願いいたします。
------------------------------------------------------------
会社名: ${companyName}
名前: ${name}
メール: ${email}
電話番号: ${phone}
メッセージ:
${message}
------------------------------------------------------------`;

        const emailUs = await transporter.sendMail({
            from: `JRG Food <info@japanrecruitment.co.jp>`,
            to: `${process.env.CONTACT_EMAIL_RECEPIENT}`,
            subject: `JRG フードお問い合わせ`, // Subject line
            text: emailUsText // plain text body
        });

        const emailThem = await transporter.sendMail({
            from: `JRG Food <info@japanrecruitment.co.jp>`,
            to: `${name} <${email}>`,
            subject: `【JRG フード】お問い合わせフォームを受け取りました`, // Subject line
            text: emailThemText // plain text body
        });

        res.status(200).json({ message: `Hello ${name} from ${companyName}` });
        return;
    }

    res.status(404).json({ message: 'Page not found!' });
}
