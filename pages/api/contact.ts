import type { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse): void {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config()
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nodemailer = require('nodemailer')
  console.log(process.env)
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'gmail',
    auth: {
      user: 'layeksourav4@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'layeksourav4@gmail.com',
    to: 'souravlayek11@gmail.com',
    subject: `Message From ${req.body.name}< ${req.body.email} > With Subject ${req.body.subject}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  }

  const responseMailData = {
    from: 'layeksourav4@gmail.com',
    to: req.body.email,
    subject: `Thanks for your concern I will contact you soon.`,
    text: 'Hi I have received your mail, and I will contact you as soon as possible, I am eagerly waiting to be in a conversation with you. thank you.',
    html: `<div>Hi I have received your mail, and I will contact you as soon as possible, I am eagerly waiting to be in a conversation with you. thank you.</div>`,
  }

  if (req.method === 'POST') {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) console.log('err', err)
      else {
        console.log('info', info)
        res.status(200).json({ message: 'Message sent' })
        transporter.sendMail(responseMailData, function (err: any, info: any) {
          if (err) console.log('err', err)
          else {
            console.log('info', info)
          }
        })
      }
    })
  }
}
