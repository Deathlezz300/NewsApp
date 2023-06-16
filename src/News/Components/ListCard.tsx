import { NewsCard } from "./NewsCard"
import { useNewsStore } from "../../Hooks/useNewsStore"
import {useState} from 'react'

export const ListCard = () => {

  const {NewsTodo}=useNewsStore();

  const [images,SetImages]=useState(16);

  return (
    <>
    <div className="grid grid-cols-18 md:grid-cols-16 gap-x-3 gap-y-4 w-[95%] h-auto">
        {
            NewsTodo.map((New1,index)=>{
                return index<images ? <NewsCard url={New1.url} key={index} description={New1.description} autor={New1.author} fecha={New1.publishedAt} title={New1.title} urlImage={New1.urlToImage} /> : ''
            })
        }
    </div>
        <div className="w-[95%] flex justify-end">
            {
                NewsTodo.length>images ? <button className="mt-3 p-3 border-2 shadow-md rounded-lg bg-blue-600 font-medium text-white" onClick={()=>SetImages(c=>c+6)}>Show more</button> : ''
            }
        </div>
    </>
  )
}
