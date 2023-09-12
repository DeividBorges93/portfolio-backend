import { Router } from "express";
import MessageController from "../controller/message.controller";

const messageController = new MessageController();
const router = Router();

router.post("/save-message", messageController.saveMessage);
router.get("/messages", messageController.getMessages);


export default router;
