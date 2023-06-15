import newsApi from "../Api/NewsApi"
import { articuloAll, peticionSources } from "../interfaces/Interfaces";
import { AxiosError ,AxiosResponse} from 'axios'
import { useDispatch } from "react-redux";
import { setNews } from "../store/NewsSlice";
import { useSelector } from "react-redux";

interface useNewsStoreIn{
    startNewsEverything:()=>Promise<peticionSources | undefined>,
    NewsTodo:articuloAll[]
}

export const useNewsStore=():useNewsStoreIn=>{

    const dispatch=useDispatch();

    const {NewsTodo}=useSelector(state=>state.news);

    const startNewsEverything=async()=>{
        try{
            const resp:AxiosResponse=await newsApi.get('top-headlines?country=us');
            const data:peticionSources=resp.data;
            if(data.status==="ok"){
                dispatch(setNews(data));
                return data;
            }
        }catch(error:AxiosError){
            console.log(error);
        }
    }

    return{
        startNewsEverything,
        NewsTodo
    }

}