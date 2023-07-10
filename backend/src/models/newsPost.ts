import { model } from 'mongoose';
import { IPost, postSchema } from './Post';

export interface INewsPost extends IPost {
    source: string;
  }


  //Si el required de source esta en true, no dejará publicar (¿porque sera?). Asi para cada tipo de post
const newsPostSchema = postSchema.add({
    source: {
      type: String,
      required: false,
    },
  });
  
  export default model<INewsPost>("NewsPost", newsPostSchema);

  export const NewsPostModel = model<INewsPost>("NewsPost", newsPostSchema);
