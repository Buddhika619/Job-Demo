import mongoose from 'mongoose'

// Create a new Mongoose schema for client
const requestSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
    },
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    appointmentDay: {
      type: Date,
      required: true,
    },
    reserveDay: {
      type: Date,
      required: true,
    },

    dayPhase: {
      type: String,
      required: true,
    },
    otherInfo: {
      type: Number,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

// This creates clients doucment in mongodb
const Request = mongoose.model('Request', requestSchema)

export default Request
