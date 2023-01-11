import Request from '../models/requestModel.js'
import cloudinary from '../middleware/cloudinary.js'

class RequestController {


  // @des  create a request
  // @route POST /api/request/
  // @access Private
async createRequest(req, res) {
    const { client,title, info, appointmentDay, reserveDay,dayPhase,otherInfo } = req.body

    // Create new
    const request = await Request.create({
        client,
        title,
        info,
        appointmentDay,
        reserveDay,
        dayPhase,
        otherInfo,
        image: req.file ? req.file.path : req.body.image
    })

     // If the user was created successfully, send a response with the user's information and a JWT token
    if (request) {
      res.status(201).json(request)
    } else {
      res.status(400)
      throw new Error('Invalid  data')
    }
  }


  async getAllRequests(req, res) {
    const requests = await Request.find()
    res.json(requests)
  }
}

export default RequestController
