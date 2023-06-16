import { useForm } from "../../Hooks/useForm"
import {FormEvent} from 'react'
import lupa from '../../assets/images/lupa.webp'
import { lenguajes } from "../../Helpers/GetLanguages"
import { useNewsStore } from "../../Hooks/useNewsStore"
import { Option } from "./Option"
const initialState={
    buscador:''
}

export const Header = () => {
  
   const {buscador,onInputChange}=useForm(initialState);
  
   const {activeLanguage,mostrarOpciones}=useNewsStore();

    const onBuscar=(evento:FormEvent<HTMLFormElement>)=>{
        evento.preventDefault();
    }

    return (
      <section
        id="form1"
        onSubmit={onBuscar}
        className="w-[90%] flex justify-center items-center py-5 gap-3"
      >
        <form className="w-[45%] rounded-lg flex items-center bg-white shadow-md">
          <input
            placeholder="Ingrese lo que desee buscar"
            className="w-[93%] rounded-lg outline-none p-2"
            onChange={onInputChange}
            type="text"
            required
            name="buscador"
            value={buscador}
          />
          <button className="cursor-pointer" form="form1">
            <img className="ml-1 w-6" src={lupa} alt="" />
          </button>
        </form>
        <div className="relative w-[7%]">
          <Option tipo={activeLanguage.tipo} imagen={activeLanguage.imagen} decision={true}/>
            <div className={`mt-2 flex flex-col absolute w-[100%] transition ease-in-out delay-150 overflow-hidden origin-top 
              ${mostrarOpciones ? 'scale-y-100' : 'scale-y-0'}`}>
               {
                lenguajes.map((len,index)=>{
                  return len.tipo!=activeLanguage.tipo ? <Option key={index} imagen={len.imagen} tipo={len.tipo} decision={false}/> : ''
                })
               }
            </div>

        </div>
      </section>
    );
}


