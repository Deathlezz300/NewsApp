import axios from 'axios';

const newsApi=axios.create({
    baseURL:'https://newsapi.org/v2/',
});

//Agregar token al header

newsApi.interceptors.request.use(config=>{
    config.url+=(config.url?.indexOf('?')=== -1 ? '?' : '&')+'apiKey=2890db523b7d4a67b4aa696368757972';
    return config;
})


export default newsApi;