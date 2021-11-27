export interface IAddress {
  name: string;
  address: string;
}

export interface IMessage {
  to: string | IAddress | Array<string | IAddress>;
  from: IAddress | string;
  subject: string;
  body: string;
}

export interface IMailProvider {
  send(message: IMessage): Promise<void>;
}
