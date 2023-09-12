import prisma from '../../prisma/prisma';
import IError from '../interfaces/IError';
import IMessage from '../interfaces/IMessage';
import validateMessageFields from '../utils/validateMessageFields';
import { Message } from '../schemas/message-schemas';

export default class MessageService {
  readonly getMessages = async (): Promise<IMessage[]> => {
    const messages = await prisma.message.findMany();

    return messages;
  }

  public saveMessage = async (message: Message): Promise<IMessage | IError> => {
    validateMessageFields(message);
    
    const { name, email, text } = message;
    
    const saveMessage = await prisma.message.create({
      data: {
        name,
        email,
        message: text,
      },
    });

    return saveMessage;
  }
}