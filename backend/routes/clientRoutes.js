import express from 'express'
import ClientController from '../controllers/clientController.js'
import asyncHandler from 'express-async-handler'
import { protect, admin } from '../middleware/authMiddleware.js'
import { fileUploadMiddleware } from '../middleware/multer.js';

// Create a new Express router
const router = express.Router()

// Create a new instance of the PostController
const clientController = new ClientController()

// get all 
router.get('/', asyncHandler(clientController.getAllClients))

// create  new 
router.post('/', fileUploadMiddleware().single('image'), asyncHandler(clientController.createClient))

export default router

//async handler catch errors and past it to the customer error handler