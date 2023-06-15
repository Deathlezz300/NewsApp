import { useEffect } from "react"
import { useNewsStore } from "./Hooks/useNewsStore"

export const NewsApp = () => {
  
  const {startNewsEverything}=useNewsStore();

  useEffect(()=>{
    startNewsEverything();
  },[])
  
  return (
    <>
      <h2>Hola</h2>
    </>
  )
}

