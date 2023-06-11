import {Router} from 'express';
import {signin, signup, editProfile ,profile, logout} from '../controllers/auth.controller';
import { AuthToken} from '../libs/AuthToken';


const router:Router = Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.put('/editprofile', editProfile);

//Rutas protegidas
router.get('/profile', AuthToken.TokenValidation,profile);

router.get('/logout', AuthToken.TokenValidation, logout);

export default router;