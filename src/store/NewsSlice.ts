import { createSlice } from '@reduxjs/toolkit';
import { peticionSources } from '../interfaces/Interfaces';
import { articuloAll } from '../interfaces/Interfaces';

type payloadIn={
    payload:peticionSources
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState: {
     NewsTodo:[] as articuloAll[]
    },
    reducers: {
        setNews:(state,{payload}:payloadIn)=>{
            state.NewsTodo=payload.articles;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setNews } = NewsSlice.actions;