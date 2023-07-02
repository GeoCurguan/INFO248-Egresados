import {Router} from 'express';
import {createPost, deletePost, getAllPosts, getPostById, getPostByType} from '../controllers/posts.controller';
import { AuthToken} from '../libs/AuthToken';

const router:Router = Router();

router.post('/createPost/:userId', createPost);
router.get('/getAllPosts', getAllPosts);
router.get('/getPostById/:postId', getPostById);
router.get('/getPostByType/:postType', getPostByType);
router.delete('/deletePost/:postId', deletePost);
export default router;

//, AuthToken.TokenValidation,








