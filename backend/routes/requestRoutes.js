import express from 'express'
import RequestController from '../controllers/requestController.js'
import asyncHandler from 'express-async-handler'
import { protect, admin } from '../middleware/authMiddleware.js'
import { fileUploadMiddleware } from '../middleware/multer.js';

// Create a new Express router
const router = express.Router()

// Create a new instance of the PostController
const requestController = new RequestController()

// get all 
router.get('/', asyncHandler(requestController.getAllRequests))

// create  new 
router.post('/', fileUploadMiddleware().single('image'), asyncHandler(requestController.createRequest))

export default router

//async handler catch errors and past it to the customer error handler