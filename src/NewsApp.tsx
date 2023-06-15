import { Routes,Route, Navigate } from "react-router-dom"
import { HomePage } from "./News/pages/HomePage"

export const NewsApp = () => {
  

  
  return (
    <Routes>
      <Route path="home" element={<HomePage/>}/>
      <Route path="/*" element={<Navigate to='/home'/>}/>
    </Routes>
  )
}

