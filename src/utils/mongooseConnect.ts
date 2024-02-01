import mongoose from 'mongoose'

const DB_URL = process.env.DB_URL || ''
export const connect = async () => {
  try {
    await mongoose.connect(DB_URL)
  } catch (error: any) {
    console.log(error.message)
  }
}
