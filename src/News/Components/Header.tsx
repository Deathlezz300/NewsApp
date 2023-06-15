import { useForm } from "../../Hooks/useForm"
import {FormEvent} from 'react'
import lupa from '../../assets/images/lupa.webp'
import { lenguajes } from "../../Helpers/GetLanguages"
import francia from  '../../assets/images/francia.png'
const initialState={
    buscador:'',
    opcion:'en'
}

export const Header = () => {
  
   const {buscador,opcion,onInputChange}=useForm(initialState);
  
    const onBuscar=(evento:FormEvent<HTMLFormElement>)=>{
        evento.preventDefault();
    }

    return (
      <section
        id="form1"
        onSubmit={onBuscar}
        className="w-[90%] flex justify-center items-center py-5"
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
        {/* <div className="relative inline-block">
          <div className="p-3 cursor-pointer">
            Seleccionar
          </div>
          <div class="dropdown-menu" id="dropdownMenu">
            <div class="dropdown-item" onclick="selectOption('Opción 1')">
              Opción 1
            </div>
            <div class="dropdown-item" onclick="selectOption('Opción 2')">
              Opción 2
            </div>
            <div class="dropdown-item" onclick="selectOption('Opción 3')">
              Opción 3
            </div>
          </div>
        </div> */}
      </section>
    );
}


