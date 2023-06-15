import { obtenerImagen } from "../../Helpers/GetDeafaultImage"
import { sourceIn } from "../../interfaces/Interfaces"

interface props{
    id:sourceIn
    autor:string,
    title:string,
    fecha:string,
    urlImage:string
}

export const NewsCard = ({id,autor,title,fecha,urlImage}:props) => {
  return (
    <div className="bg-white cursor-pointer hover:scale-[1.01] rounded-lg shadow-md w-full px-1 py-3 border-2 flex flex-col gap-1 items-center justify-center">

        <img className="bg-center object-cover bg-no-repeat max-h-[150px] rounded-lg w-[90%]" src={urlImage ? urlImage : obtenerImagen(title)} />
        <div className="flex flex-col justify-center w-[90%] h-auto" >
            <h3 className="font-conden text-lg font-semibold text-justify">{title}</h3>
            <h4 className="pt-1 font-medium text-gray-600 text-sm" >{autor===null || autor.indexOf('/')!=-1 ? 'Sin autor' :autor}-{new Date(fecha).getFullYear()}</h4>
        </div>

    </div>
  )
}
