import IError from "../interfaces/IError";
import { Message, MessageSchema } from "../schemas/message-schemas";

export default (message: Message) => {
  const validatedMessage = MessageSchema.safeParse(message);

  if (validatedMessage.success == false) {
    throw {
      code: 401,
      message: validatedMessage.error.errors[0].message
    } as IError;
  }
};
