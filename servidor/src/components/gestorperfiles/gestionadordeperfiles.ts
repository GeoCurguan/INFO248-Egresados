import { Perfil } from '../perfil/perfil';
import { GestorPerfiles } from './gestorperfiles';

export interface PostNoticia {
    GestorPerfiles(id: number): Perfil;
};
