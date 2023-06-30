import { Schema, model, Document, Types } from "mongoose";

export interface IPost extends Document {
  id_user: string;
  author: string;
  title: string;
  image: string;
  date: string;
  body: string;
  type: string;
}

const postSchema = new Schema({
  id_user: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

//Acá se puede extender a otras clases, ya sea Noticias, Ofertas Laborales, etc

export default model<IPost>("Post", postSchema);
