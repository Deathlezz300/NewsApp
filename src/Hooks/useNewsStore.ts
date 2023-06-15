import newsApi from "../Api/NewsApi"
import { peticionSources } from "../interfaces/Interfaces";
import { AxiosError ,AxiosResponse} from 'axios'
import { useDispatch } from "react-redux";
import { setNews } from "../store/NewsSlice";

interface useNewsStoreIn{
    startNewsEverything:()=>Promise<peticionSources | undefined>
}

export const useNewsStore=():useNewsStoreIn=>{

    const dispatch=useDispatch();

    const startNewsEverything=async()=>{
        try{
            const resp:AxiosResponse=await newsApi.get('top-headlines/sources');
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
        startNewsEverything
    }

}