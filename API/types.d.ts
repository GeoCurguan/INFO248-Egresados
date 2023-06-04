declare namespace Express {
    export interface Request{
        userId: string;
    }
}

// Esto nos sirve pasra extender einterfaces, esta vez lo usaremmos para que a req le agreguemos la caracteristica userId