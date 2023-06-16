import { LoaderArray } from "../../Helpers/GetDeafaultImage"
import { LoaderComponent } from "./LoaderComponent"

export const ListLoaders = () => {
  return (
    <div className="grid grid-cols-18 md:grid-cols-16 gap-x-3 gap-y-4 w-[95%] h-auto">
        {
            LoaderArray.map(tod=>{
                return <LoaderComponent key={tod}/>
            })
        }
    </div>
  )
}
