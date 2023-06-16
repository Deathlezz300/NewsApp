import newsApi from "../Api/NewsApi"
import { InSelector, articuloAll, lenguaje, peticionSources } from "../interfaces/Interfaces";
import { AxiosError ,AxiosResponse} from 'axios'
import { useDispatch } from "react-redux";
import { changeStateOpciones, setActiveLanguage, setActiveNew, setNews } from "../store/NewsSlice";
import { useSelector } from "react-redux";

interface useNewsStoreIn{
    startNewsEverything:()=>Promise<peticionSources | undefined>,
    NewsTodo:articuloAll[],
    activeNew:articuloAll,
    onSetActiveNew:(id:number)=>void,
    status:string,
    activeLanguage:lenguaje,
    mostrarOpciones:boolean,
    changeMostrarOpcioneState:()=>void,
    OnsetActiveLanguage:(data:lenguaje)=>void
}

export const useNewsStore=():useNewsStoreIn=>{

    const dispatch=useDispatch();

    const {activeNew,NewsTodo,status,activeLanguage,mostrarOpciones}:InSelector=useSelector(state=>state.news);

    const startNewsEverything=async()=>{
        try{
            const resp:AxiosResponse=await newsApi.get('top-headlines?country=us');
            const data:peticionSources=resp.data;
            data.articles=data.articles.map((dat,index)=>{
                dat.source.id=index;
                return dat;
            })
            if(data.status==="ok"){
                dispatch(setNews(data));
                return data;
            }
        }catch(error:AxiosError){
            console.log(error);
        }
    }

    const onSetActiveNew=(id:number)=>{
        const NewToFind=NewsTodo.find(tod=>{
            return tod.source.id==id
        });

        dispatch(setActiveNew(NewToFind));
        
    }

    const changeMostrarOpcioneState=()=>{
        dispatch(changeStateOpciones());
    }

    const OnsetActiveLanguage=(data:lenguaje)=>{
        dispatch(changeStateOpciones());
        dispatch(setActiveLanguage(data));
    }


    return{
        startNewsEverything,
        NewsTodo,
        activeNew,
        onSetActiveNew,
        status,
        activeLanguage,
        mostrarOpciones,
        changeMostrarOpcioneState,
        OnsetActiveLanguage
    }

}