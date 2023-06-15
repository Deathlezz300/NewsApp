import { Routes,Route, Navigate } from "react-router-dom"
import { HomePage } from "./News/pages/HomePage"
import { NewsPage } from "./News/pages/NewsPage"
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
      <Route path="news/:id" element={<NewsPage/>}/>
    </Routes>
  )
}

