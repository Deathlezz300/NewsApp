import { lenguaje } from "../interfaces/Interfaces";
import ingles from '../assets/images/usa.png'
import arabe from '../assets/images/arabe.webp'
import aleman from '../assets/images/alemania.png'
import espanol from '../assets/images/español.avif'
import francia from '../assets/images/francia.png'

export const lenguajes:lenguaje[]=
[
    {
        tipo:'en',
        imagen:ingles
    },
    {
        tipo:'ar',
        imagen:arabe
    },
    {
        tipo:'de',
        imagen:aleman
    },
    {
        tipo:'es',
        imagen:espanol
    },{
        tipo:'fr',
        imagen:francia
    }
];