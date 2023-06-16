import { useForm } from "../../Hooks/useForm"
import {FormEvent} from 'react'
import lupa from '../../assets/images/lupa.webp'
import { lenguajes } from "../../Helpers/GetLanguages"
import { useNewsStore } from "../../Hooks/useNewsStore"
import { Option } from "./Option"
import {useEffect} from 'react'

const initialState={
    buscador:''
}

export const Header = () => {
  
   const {buscador,onInputChange}=useForm(initialState);
  
   const {activeLanguage,mostrarOpciones,LoadingByLanguageAndSearch,startLoadingByLanguage,cambiarImages}=useNewsStore();

    useEffect(()=>{
      if(buscador!=''){
        LoadingByLanguageAndSearch(activeLanguage.tipo,buscador);
      }else{
        startLoadingByLanguage(activeLanguage.pais);
      }
    },[activeLanguage])

    const onBuscar=(evento:FormEvent<HTMLFormElement>)=>{
        evento.preventDefault();
        cambiarImages('reiniciar');
        LoadingByLanguageAndSearch(activeLanguage.tipo,buscador);
    }

    return (
      <section
        className=" w-[95%] md:w-[90%] flex justify-center items-center py-5 gap-3"
      >
        <form id="form1"
        onSubmit={onBuscar} className=" lg:w-[55%] md:w-[70%] w-[90%] justify-between rounded-lg flex items-center bg-white shadow-md">
          <input
            placeholder="Ingrese lo que desee buscar"
            className="w-[93%] rounded-lg outline-none p-2"
            onChange={onInputChange}
            type="text"
            required
            name="buscador"
            value={buscador}
          />
          <button form="form1" type="submit" className="cursor-pointer mr-2">
            <img className="ml-1 w-6" src={lupa} alt="" />
          </button>
        </form>
        <div className="relative">
          <Option pais={activeLanguage.pais} tipo={activeLanguage.tipo} imagen={activeLanguage.imagen} decision={true}/>
            <div className={`mt-2 flex flex-col absolute w-[100%] transition ease-in-out delay-150 overflow-hidden origin-top 
              ${mostrarOpciones ? 'scale-y-100' : 'scale-y-0'}`}>
               {
                lenguajes.map((len,index)=>{
                  return len.tipo!=activeLanguage.tipo ? <Option pais={len.pais} key={index} imagen={len.imagen} tipo={len.tipo} decision={false}/> : ''
                })
               }
            </div>

        </div>
      </section>
    );
}


