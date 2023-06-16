import { createSlice } from '@reduxjs/toolkit';
import { lenguaje, peticionSources } from '../interfaces/Interfaces';
import { articuloAll } from '../interfaces/Interfaces';
import { lenguajes } from '../Helpers/GetLanguages';

interface payloadIn{
    payload:peticionSources
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState: {
     NewsTodo:[] as articuloAll[],
     activeNew:{} as articuloAll | null,
     status:'not-loading' as string,
     activeLanguage:lenguajes[0] as lenguaje,
     mostrarOpciones:false as boolean
    },
    reducers: {
        setNews:(state,{payload}:payloadIn)=>{
            state.NewsTodo=payload.articles;
            state.status='not-loading';
        },
        setActiveNew:(state,{payload}:{payload:articuloAll})=>{
            if(payload){
                state.activeNew=payload;
            }else{
                state.activeNew=null;
            }
            state.status='not-loading'
        },
        setLoading:(state)=>{
            state.status='loading';
        },
        setActiveLanguage:(state,{payload}:{payload:lenguaje})=>{
            state.activeLanguage=payload;
        },
        changeStateOpciones:(state)=>{
            state.mostrarOpciones=!state.mostrarOpciones;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setNews,setActiveNew,setActiveLanguage,changeStateOpciones } = NewsSlice.actions;