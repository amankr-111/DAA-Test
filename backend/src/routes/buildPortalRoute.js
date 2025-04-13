import express from "express"
import { addEvent, getEvents } from "../controller/buildPortalController.js";

const router = express.Router();


router.post('/add-event',addEvent);
router.get('/get-event',getEvents);


export default router;