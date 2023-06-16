import { createSlice } from '@reduxjs/toolkit';
import { lenguaje, peticionSources } from '../interfaces/Interfaces';
import { articuloAll } from '../interfaces/Interfaces';
import { lenguajes } from '../Helpers/GetLanguages';

interface payloadIn{
    payload:peticionSources
}

interface InInitial{
    NewsTodo:articuloAll[],
    status:string,
    activeLanguage:lenguaje,
    mostrarOpciones:boolean
}


const DataInital:InInitial={
    NewsTodo:[] as articuloAll[],
    status:'loading',
    activeLanguage:lenguajes[0],
    mostrarOpciones:false,
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState:DataInital,
    reducers: {
        setNews:(state,{payload}:payloadIn)=>{
            state.NewsTodo=payload.articles;
            state.status='not-loading';
        },
        setLoading:(state)=>{
            state.status='loading';
        },
        setActiveLanguage:(state,{payload}:{payload:lenguaje})=>{
            state.activeLanguage=payload;
        },
        changeStateOpciones:(state)=>{
            state.mostrarOpciones=!state.mostrarOpciones;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setNews,setActiveLanguage,changeStateOpciones,setLoading } = NewsSlice.actions;