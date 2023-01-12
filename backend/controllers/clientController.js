import Client from '../models/clientModel.js'
import cloudinary from '../middleware/cloudinary.js'

class ClientController {


  // @des  create a client
  // @route POST /api/client/
  // @access Private
async createClient(req, res) {
    const { name, email, phone,company,address } = req.body

    const userExists = await Client.findOne({ email })

     // If a user with the provided email already exists, send a 400 response and throw an error
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    // Create new
    const client = await Client.create({
      name,
      company,
      phone,
      email,
      address
    })

     // If the client was created successfully, send a response with the user's information and a JWT token
    if (client) {
      res.status(201).json(client)
    } else {
      res.status(400)
      throw new Error('Invalid data')
    }
  }


  // @des  get a client
  // @route GET /api/client/
  // @access Private
  async getAllClients(req, res) {
    const clients = await Client.find()
    res.json(clients)
  }
}

export default ClientController
