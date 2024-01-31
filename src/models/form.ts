import mongoose, { model, Schema } from 'mongoose'

const formSchema = new Schema({
  userId: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },

  country: {
    type: String
  },

  phone: {
    type: String
  },

  stepTwo: {
    address: {
      type: String,
    },
    postalCode: {
      type: Number,
    }
  }
})

export default mongoose.models.form || mongoose.model('form', formSchema);


