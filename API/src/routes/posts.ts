import {Router} from 'express';
import {createPost, deletePost, getAllPosts, getPostById, getPostByType} from '../controllers/posts.controller';
import { AuthToken} from '../libs/AuthToken';

const router:Router = Router();

router.post('/createPost/:userId',  AuthToken.TokenValidation,createPost);
router.get('/getAllPosts', getAllPosts);
router.get('/getPostById/:postId', getPostById);
router.get('/getPostByType/:postType', getPostByType);
router.delete('/deletePost/:postId', AuthToken.TokenValidation, deletePost);
export default router;

//








