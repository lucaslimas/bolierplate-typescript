import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { IMailProvider, IMessage } from '../IMailProvider';

class MailtrapProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: '',
      port: 2525,
      auth: {
        user: '',
        pass: '',
      },
    });
  }
  async send(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: message.to,
      from: message.from,
      subject: message.subject,
      html: message.body,
    });
  }
}

export { MailtrapProvider };
