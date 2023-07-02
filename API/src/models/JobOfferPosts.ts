import { model } from 'mongoose';
import { IPost, postSchema } from './Post';


export interface IJobOfferPost extends IPost {
    salary: string;
    company: string;
  }
  
  const jobOfferPostSchema = postSchema.add({
    salary: {
      type: String,
      required: false,
    },
    company: {
      type: String,
      required: false,
    },
  });

  export default model<IJobOfferPost>("JobOfferPost", jobOfferPostSchema);


export const JobOfferPostModel = model<IJobOfferPost>("JobOfferPost", jobOfferPostSchema);
