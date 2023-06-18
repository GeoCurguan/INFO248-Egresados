import {Router} from 'express';
import {createPost} from '../controllers/posts.controller';
import { AuthToken} from '../libs/AuthToken';

const router:Router = Router();

router.post('/:userId', createPost);

export default router;