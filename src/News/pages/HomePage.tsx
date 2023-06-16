import { Header } from "../Components/Header"
import { ListCard } from "../Components/ListCard"
import { useNewsStore } from "../../Hooks/useNewsStore"
import { ListLoaders } from "../Components/ListLoaders";
import { NoResultsPage } from "./NoResultsPage";

export const HomePage = () => {

  const {status,NewsTodo}=useNewsStore();



  return (
    <>
      <section className="w-full bg-gray-100 flex flex-col justify-center items-center py-10">
        <Header/>
        {
          status=='loading' ? <ListLoaders/> : <ListCard/>
        }{
          NewsTodo.length<=0 && status!='loading' ? <NoResultsPage/> : ''
        }
      </section>
    </>
  )
}
