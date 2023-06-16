import { obtenerImagen } from "../../Helpers/GetDeafaultImage"

interface props{
    description:string
    autor:string,
    title:string,
    fecha:string,
    urlImage:string,
    url:string
}

export const NewsCard = ({description,autor,title,fecha,urlImage,url}:props) => {
  
  
  return (
    <a  href={url} target="_blank" className="bg-white cursor-pointer hover:scale-[1.01] rounded-lg shadow-md w-full px-1 py-3 border-2 flex flex-col gap-1 items-center justify-center">

        <div className="w-[90%] flex flex-col gap-3 justify-between items-center md:flex-row">
          <img className="bg-center object-cover bg-no-repeat max-h-[150px] w-[100%] rounded-lg md:w-[50%]" src={urlImage ? urlImage : obtenerImagen(title)} />
          <h3 className="font-conden text-lg font-semibold text-center w-[100%] md:w-[50%]">{title}</h3>
        </div>
        
        <div className="flex flex-col justify-center w-[90%] h-auto" >
            <p className="mt-1 text-justify">{description}</p>
            <h4 className="pt-1 font-medium text-gray-600 text-sm" >{autor===null || autor.indexOf('/')!=-1 ? 'Sin autor' :autor}-{new Date(fecha).getFullYear()}</h4>
        </div>

    </a>
  )
}
