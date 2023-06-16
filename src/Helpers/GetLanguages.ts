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
        pais:'us',
        imagen:ingles
    },
    {
        tipo:'ar',
        pais:'sa',
        imagen:arabe
    },
    {
        tipo:'de',
        pais:'de',
        imagen:aleman
    },
    {
        tipo:'es',
        pais:'ar',
        imagen:espanol
    },{
        tipo:'fr',
        pais:'fr',
        imagen:francia
    }
];