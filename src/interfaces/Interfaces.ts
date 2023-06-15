export interface peticionSources{
    status:string,
    sources:articuloAll[]
}

export interface articuloAll{
    id:string,
    name:string,
    description:string,
    url:string,
    category?:string,
    language?:string,
    country?:string
}

interface sourceIn{
    id:string,
    name:string
}







,