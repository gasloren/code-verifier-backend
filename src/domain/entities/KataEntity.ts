import mongoose from "mongoose";

// --------------

export const KataEntity = () => {

  let kataSchema = new mongoose.Schema(
    {
      name: String,
      decription: String,
      level: Number,
      user: String,
      date: Date,
      valoration: Number,
      chances: Number
    }
  );

  return mongoose.model('katas', kataSchema);

};

