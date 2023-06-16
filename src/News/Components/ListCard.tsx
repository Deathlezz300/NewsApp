import { NewsCard } from "./NewsCard"
import { useNewsStore } from "../../Hooks/useNewsStore"

export const ListCard = () => {

  const {NewsTodo}=useNewsStore();

  return (
    <div className="grid grid-cols-18 md:grid-cols-16 gap-x-3 gap-y-4 w-[95%] h-auto">
        {
            NewsTodo.map((New1,index)=>{
                return <NewsCard url={New1.url} key={index} description={New1.description} autor={New1.author} fecha={New1.publishedAt} title={New1.title} urlImage={New1.urlToImage} />
            })
        }
    </div>
  )
}
