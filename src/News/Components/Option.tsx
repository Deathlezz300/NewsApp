import { useNewsStore } from "../../Hooks/useNewsStore"

interface props{
    imagen:string,
    tipo:string,
    decision:boolean
}


export const Option = ({imagen,tipo,decision}:props) => {

   const {changeMostrarOpcioneState,OnsetActiveLanguage}=useNewsStore();
   
   const onClickOption=()=>{
     if(decision){
        changeMostrarOpcioneState();
     }else{
        OnsetActiveLanguage({tipo,imagen});
     }
   }

  return (
    <div onClick={onClickOption} className={`w-[100%] gap-2 p-2 flex ${decision ? 'rounded-lg hover:shadow-[0_0_0_2px_rgba(59,130,246,1)] transition-all' : 'hover:bg-blue-600'} 
        bg-white justify-center items-center cursor-pointer first:rounded last:rounded`}>
        <img className="w-6" src={imagen} alt="" />
        <h3 className="text-sm font-medium">{tipo.toUpperCase()}</h3>
    </div>
  )
}
