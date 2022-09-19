import { useCallback } from "react";

export default function useOnEnter(callback, input){
 return useCallback((event)=>{
  if(event.key === 'Enter'){
    event.preventDefault()
    callback(event)
  }
 },input)
}

