import app from './app';
import './database';
import dotenv from 'dotenv';

dotenv.config();


const main = () =>{

    app.listen(app.get('port'));

    console.log('Server prendido en el puerto', app.get('port'));
}



main();
