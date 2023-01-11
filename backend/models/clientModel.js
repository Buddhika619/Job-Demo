import mongoose from 'mongoose'

// Create a new Mongoose schema for client
const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },

    phone: {
      type: [String],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      street1: {
        type: String,
        required: true,
      },
      street2: String,
      city: {
        type: String,
        required: true,
      },
      state: String,
      country: String,
      zip: String,
    },
   
  },
  {
    timestamps: true,
  }
)

// This creates clients doucment in mongodb
const Client = mongoose.model('Client', clientSchema)

export default Client
