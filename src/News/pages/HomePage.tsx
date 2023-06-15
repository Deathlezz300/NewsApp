import { ListCard } from "../Components/ListCard"
import {useEffect} from 'react'
import { useNewsStore } from "../../Hooks/useNewsStore"

export const HomePage = () => {

  const {startNewsEverything}=useNewsStore();

  useEffect(()=>{
    startNewsEverything();
  },[])

  return (
    <section className="w-full bg-gray-50 flex justify-center items-center py-10">

        <ListCard/>

    </section>
  )
}
