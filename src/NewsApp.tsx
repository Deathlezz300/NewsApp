import { Routes,Route, Navigate } from "react-router-dom"
import { HomePage } from "./News/pages/HomePage"
import {useEffect} from 'react'
import { useNewsStore } from "./Hooks/useNewsStore"

export const NewsApp = () => {
  
  const {startNewsEverything}=useNewsStore();

  useEffect(()=>{
    startNewsEverything();
  },[])

  
  return (
    <Routes>
      <Route path="home" element={<HomePage/>}/>
      <Route path="/*" element={<Navigate to='/home'/>}/>
    </Routes>
  )
}

