export interface FormStepTwo {
  userId: string
  stepTwo: {
    address: string
    postalCode: string
  }
}
export interface FormOneStep {
  userId?: string
  name: string
  lastName: string
  country: string
  phone: string
}

export interface Blogs {
  _id?: string
  title: string
  author: string
  desc: string
  image: string
}
