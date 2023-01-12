import Quote from '../models/quoteModel.js'


class QuoteController {

  // @des  create a quote
  // @route POST /api/quote/
  // @access Private
async createQuote(req, res) {
    const { client,title, serviceItems, total, discount,otherInfo } = req.body

    // Create new
    const quote = await Quote.create({
      client,
      title,
      serviceItems,
      total,
      discount,
      otherInfo,
      image: req.file ? req.file.path : req.body.image
    })

     // If the quote was created successfully, send a response with the user's information and a JWT token
    if (quote) {
      res.status(201).json(quote)
    } else {
      res.status(400)
      throw new Error('Invalid  data')
    }
  }


  async getAllQuotes(req, res) {
    const quotes = await Quote.find()
    res.json(quotes)
  }
}

export default QuoteController
