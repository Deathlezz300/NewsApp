import { NewsCard } from "./NewsCard"
import { useNewsStore } from "../../Hooks/useNewsStore"
import {useState} from 'react'

export const ListCard = () => {

  const {NewsTodo,cantidad,cambiarImages}=useNewsStore();

  return (
    <>
    <div className="grid grid-cols-18 md:grid-cols-16 gap-x-3 gap-y-4 w-[95%] h-auto">
        {
            NewsTodo.map((New1,index)=>{
                return index<cantidad ? <NewsCard url={New1.url} key={index} description={New1.description} autor={New1.author} fecha={New1.publishedAt} title={New1.title} urlImage={New1.urlToImage} /> : ''
            })
        }
    </div>
        <div className="w-[95%] flex justify-end">
            {
                NewsTodo.length>cantidad ? <button className="mt-3 p-3 border-2 shadow-md rounded-lg bg-blue-600 font-medium text-white" onClick={()=>cambiarImages('aumentar')}>Show more</button> : ''
            }
        </div>
    </>
  )
}
