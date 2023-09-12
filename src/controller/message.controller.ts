import { NextFunction, Request, Response } from "express";
import MessageService from "../services/message.service";

export default class MessageController {
  constructor(private messageService = new MessageService()) {}

  readonly getMessages = async(req: Request, res: Response) => {
    const messages = await this.messageService.getMessages();

    return res.status(200).json(messages);
  }

  public saveMessage = async(req: Request, res: Response, next: NextFunction) => {
    const message = req.body;
    
    await this.messageService.saveMessage(message);
    
    return res.status(201).json("Mensagem salva com sucesso!");
  }
}