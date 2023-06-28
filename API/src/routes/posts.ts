import {Router} from 'express';
import {createPost, deletePost, getAllPosts} from '../controllers/posts.controller';
import { AuthToken} from '../libs/AuthToken';

const router:Router = Router();

router.post('/createPost/:userId', AuthToken.TokenValidation, createPost);
router.get('/getAllPosts', getAllPosts);
router.delete('/deletePost/:postId', AuthToken.TokenValidation, deletePost);
export default router;