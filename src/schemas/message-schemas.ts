import { z } from 'zod';

const numMinName = 3;
const numMinMessage = 15;


const messages = {
  minName: "O nome não pode ser menor que 3 caracteres",
  minEmail: "O email não pode ser menor que 6 caracteres",
  minMessage: "A mensagem não pode ser menor que 15 caracteres",

}

export const MessageSchema = z.object({
  name: z.string({ required_error: "O nome é obrigatório" }).min(numMinName, messages.minName),
  email: z.string({ required_error: "Um email é obrigatório" }).email("E-mail inválido").min(numMinMessage, messages.minEmail),
  text: z.string({ required_error: "Uma mensagem é obrigatório" }).min(numMinMessage, messages.minMessage)
})

export type Message = z.infer<typeof MessageSchema>;