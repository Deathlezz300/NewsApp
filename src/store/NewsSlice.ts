import { createSlice } from '@reduxjs/toolkit';
import { peticionSources } from '../interfaces/Interfaces';
import { articuloAll } from '../interfaces/Interfaces';


interface payloadIn{
    payload:peticionSources
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState: {
     NewsTodo:[] as articuloAll[],
     activeNew:{} as articuloAll | null,
     status:'not-loading' as string
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
        }
    }
});


// Action creators are generated for each case reducer function
export const { setNews,setActiveNew } = NewsSlice.actions;