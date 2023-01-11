import express from 'express'
import QuoteController from '../controllers/quoteController.js'
import asyncHandler from 'express-async-handler'
import { protect, admin } from '../middleware/authMiddleware.js'
import { fileUploadMiddleware } from '../middleware/multer.js';

// Create a new Express router
const router = express.Router()

// Create a new instance of the PostController
const quoteController = new QuoteController()

// get all 
router.get('/', asyncHandler(quoteController.getAllQuotes))

// create  new 
router.post('/', fileUploadMiddleware().single('image'), asyncHandler(quoteController.createQuote))

export default router


//async handler catch errors and past it to the customer error handler