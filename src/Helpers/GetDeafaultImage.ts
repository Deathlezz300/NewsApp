import business from '../assets/images/business.webp'
import entretenimiento from '../assets/images/entretenimiento.webp'
import general from '../assets/images/general.jpg'
import salud from '../assets/images/salud.jpeg'
import ciencia from '../assets/images/ciencia.jpg'
import deporte from '../assets/images/deporte.webp'
import tecnologia from '../assets/images/tecnologia.jpg'

interface categoria{
    category:string,
    imageUrl:string
}

const data:categoria[]=[
    {
        category:'business',
        imageUrl:business
    },
    {
        category:'entertaiment',
        imageUrl:entretenimiento
    },
    {
        category:'general',
        imageUrl:general
    },
    {
        category:'health',
        imageUrl:salud
    },
    {
        category:'science',
        imageUrl:ciencia
    },
    {
        category:'sports',
        imageUrl:deporte
    },
    {
        category:'technology',
        imageUrl:tecnologia
    }
]

export const LoaderArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

export const obtenerImagen=(categoria:string | undefined):string | undefined=>{
    const image=data.find(dat=>{
        return categoria?.includes(dat.category);
    });

    return image ? image.imageUrl : general;
}