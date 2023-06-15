import { Navigate } from "react-router-dom"
import { useNewsStore } from "../../Hooks/useNewsStore";
import {useEffect} from 'react'
import { useParams } from "react-router-dom";

export const NewsPage = () => {

  const {id}=useParams();

  const {activeNew,onSetActiveNew,status}=useNewsStore();

  useEffect(()=>{
    onSetActiveNew(id);
  },[id])


  if(!activeNew && status!='loading'){
    return <Navigate to='/home' replace/>
  }

  return (
    <div>NewsPage</div>
  )
}
