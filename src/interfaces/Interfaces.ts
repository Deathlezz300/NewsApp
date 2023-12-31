export interface peticionSources{
    status:string,
    articles:articuloAll[]
}

export interface articuloAll{
    source:sourceIn,
    title:string,
    description:string,
    url:string,
    urlToImage:string,
    publishedAt:string,
    author:string,
    content:string,
    category?:string,
    language?:string,
    country?:string
}

export interface sourceIn{
    id:number,
    name:string
}


export interface lenguaje{
    tipo:string,
    pais:string
    imagen:string
}
