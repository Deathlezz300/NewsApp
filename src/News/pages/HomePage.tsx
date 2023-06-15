import { Header } from "../Components/Header"
import { ListCard } from "../Components/ListCard"

export const HomePage = () => {

  return (
    <>
      <section className="w-full bg-gray-100 flex flex-col justify-center items-center py-10">
        <Header/>
        <ListCard/>
      </section>
    </>
  )
}
