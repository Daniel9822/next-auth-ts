import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    desc: {
      type: String,
      require: true
    },
    author: {
      type: String,
      require: true
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.models.blog || mongoose.model('blog', BlogSchema)