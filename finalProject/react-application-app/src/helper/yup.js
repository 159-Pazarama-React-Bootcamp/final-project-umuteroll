import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
  name: string().required(),
  lastName: string().required(),
  age: number().required().positive("Pozitif rakam giriniz").integer(),
  idNO: number().required().positive().integer(),
  email: string().email(),
  address: string().required(),
  subject: string().required(),
  applyReason: string().required()
});


export {userSchema};