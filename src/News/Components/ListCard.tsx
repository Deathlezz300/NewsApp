import { NewsCard } from "./NewsCard"
import { useNewsStore } from "../../Hooks/useNewsStore"

export const ListCard = () => {

  const {NewsTodo}=useNewsStore();

  return (
    <div className="grid grid-cols-16 gap-x-3 gap-y-4 w-[95%] h-auto border-2 border-black">
        {
            NewsTodo.map((New1,index)=>{
                return <NewsCard key={index} id={New1.source.id} autor={New1.author} fecha={New1.publishedAt} title={New1.title} urlImage={New1.urlToImage} />
            })
        }
    </div>
  )
}
