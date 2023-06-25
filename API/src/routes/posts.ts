import {Router} from 'express';
import {createPost} from '../controllers/posts.controller';
import { AuthToken} from '../libs/AuthToken';

const router:Router = Router();

router.post('/:userId', AuthToken.TokenValidation, createPost);

export default router;