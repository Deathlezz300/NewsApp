import { Header } from "../Components/Header"
import { ListCard } from "../Components/ListCard"
import { useNewsStore } from "../../Hooks/useNewsStore"
import { ListLoaders } from "../Components/ListLoaders";
import { NoResultsPage } from "./NoResultsPage";
import { Footer } from "../Components/Footer";

export const HomePage = () => {

  const {status,NewsTodo}=useNewsStore();



  return (
    <div className="min-h-screen flex flex-col justify-between">
      <section className="w-full bg-gray-100 flex flex-col justify-center items-center pt-10 pb-5">
      <h1 className="text-blue-600 font-bold font-oswa text-5xl w-[95%] text-left after:content-['App'] after:text-black after:font-oswa after:font-bold">News</h1>
        <Header/>
        {
          status=='loading' ? <ListLoaders/> : <ListCard/>
        }{
          NewsTodo.length<=0 && status!='loading' ? <NoResultsPage/> : ''
        }
      </section>
      <Footer/>
      </div>
  )
}
