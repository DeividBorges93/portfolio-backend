import { NextFunction, Request, Response } from "express";
import MessageService from "../services/message.service";

export default class MessageController {
  constructor(private messageService = new MessageService()) {}

  public saveMessage = async(req: Request, res: Response, next: NextFunction) => {
    const message = req.body;
    
    await this.messageService.saveMessage(message);
    
    return res.status(201).json("Mensagem salva com sucesso!");
  }
}