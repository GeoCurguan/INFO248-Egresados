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

export interface INewsPost extends IPost {
  source: string;
}

//Si el required de source esta en true, no dejará publicar (¿porque sera?)
const newsPostSchema = postSchema.add({
  source: {
    type: String,
    required: false,
  },
});

export interface IJobOfferPost extends IPost {
  sueldo: string;
  empresa: string;
}

const jobOfferPostSchema = postSchema.add({
  sueldo: {
    type: String,
    required: true,
  },
  empresa: {
    type: String,
    required: true,
  },
});

export interface IBenefitsPost extends IPost {
  category: string;
}

export const NewsPostModel = model<INewsPost>("NewsPost", newsPostSchema);
export const JobOfferPostModel = model<IJobOfferPost>("JobOfferPost", jobOfferPostSchema);
export const BenefitsPostModel = model<IBenefitsPost>("BenefitsPost", postSchema);