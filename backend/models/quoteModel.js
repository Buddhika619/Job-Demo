import mongoose from 'mongoose'


// Create a new Mongoose schema for client
const quoteSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
    },
    title: {
      type: String,
      required: true,
    },
    serviceItems: [
      {
        service: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
    total: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
      },
      otherInfo: {
        type: String,
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
const Quote = mongoose.model('Quote', quoteSchema)

export default Quote
