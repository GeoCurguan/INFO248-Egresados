import { model } from 'mongoose';
import { IPost, postSchema } from './Post';
export interface IBenefitsPost extends IPost {
    category: string;
  }
  
  const BenefitsPostSchema = postSchema.add({
    category: {
      type: String,
      required:false
    }
  })

export default model<IBenefitsPost>("BenefitsPost", BenefitsPostSchema);

export const BenefitsPostModel = model<IBenefitsPost>("BenefitsPost", postSchema);
