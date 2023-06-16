import newsApi from "../Api/NewsApi"
import { InSelector, articuloAll, lenguaje, peticionSources } from "../interfaces/Interfaces";
import { AxiosError ,AxiosResponse} from 'axios'
import { useDispatch } from "react-redux";
import { changeStateOpciones, setActiveLanguage, setActiveNew, setLoading, setNews } from "../store/NewsSlice";
import { useSelector } from "react-redux";
import {useState} from 'react'

interface useNewsStoreIn{
    startNewsEverything:()=>Promise<void>,
    NewsTodo:articuloAll[],
    activeNew:articuloAll,
    onSetActiveNew:(id:number)=>void,
    status:string,
    activeLanguage:lenguaje,
    mostrarOpciones:boolean,
    changeMostrarOpcioneState:()=>void,
    OnsetActiveLanguage:(data:lenguaje)=>void,
    startLoadingByLanguage:(bandera:string)=>Promise<void>,
    LoadingByLanguageAndSearch:(bandera:string,parametro:string)=>Promise<void>,
    cantidad:number,
    cambiarImages:(tipo:'aumentar' | 'reiniciar')=>void
}

export const useNewsStore=():useNewsStoreIn=>{

    const dispatch=useDispatch();

    const [cantidad,Setcantidad]=useState(16);

    const {activeNew,NewsTodo,status,activeLanguage,mostrarOpciones}:InSelector=useSelector(state=>state.news);

    const startNewsEverything=async()=>{
        dispatch(setLoading());
        try{
            const resp:AxiosResponse=await newsApi.get('top-headlines?pageSize=100&country=us');
            const data:peticionSources=resp.data;
            data.articles=data.articles.map((dat,index)=>{
                dat.source.id=index;
                return dat;
            })
            if(data.status==="ok"){
                dispatch(setNews(data));
            }
        }catch(error:AxiosError){
            console.log(error);
        }
    }

    const startLoadingByLanguage=async(bandera:string)=>{
        dispatch(setLoading());
        try{
            const resp:AxiosResponse=await newsApi.get(`top-headlines?country=${bandera}`);
            const data:peticionSources=resp.data;
            data.articles=data.articles.map((dat,index)=>{
                dat.source.id=index;
                return dat;
            })
            if(data.status==="ok"){
                dispatch(setNews(data));
            };
        }catch(error){
            console.log(error);
        }
    }

    const LoadingByLanguageAndSearch=async(bandera:string,parametro:string)=>{
        dispatch(setLoading());
        try{
            const url=bandera!='all' ? `everything?q=${parametro}&language=${bandera}` : `everything?q=${parametro}`
            const resp:AxiosResponse=await newsApi.get(url);
            const data:peticionSources=resp.data;
            data.articles=data.articles.map((dat,index)=>{
                dat.source.id=index;
                return dat;
            })
            if(data.status==="ok"){
                dispatch(setNews(data));
            };
        }catch(error){
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

    const cambiarImages=(tipo:'aumentar' | 'reiniciar')=>{
        if(tipo==='aumentar'){
            Setcantidad(c=>c+6);
        }else{
            Setcantidad(16);
        }
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
        OnsetActiveLanguage,
        startLoadingByLanguage,
        LoadingByLanguageAndSearch,
        cantidad,
        cambiarImages
    }

}