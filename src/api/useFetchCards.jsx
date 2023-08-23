import { useEffect, useState } from "react"
export const useFetchCards = () => {
    const [cards,setCards]=useState([])
    const getAllCards=async()=>{
        
        try{
            const res=await fetch("https://simple-api-vercel-gamma.vercel.app/api")
            const json=await res.json()
            if(json){
                const {data}=json;
                setCards(data)
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllCards()
      },[])
    
    const deleteCards=async(idCard)=>{
        try{
            const res=await fetch(`https://simple-api-vercel-gamma.vercel.app/api/${idCard}`,{
                method:"DELETE"
            })
            if(res){
                alert("Card has been delete¡¡¡")
                location.reload()
            }
        }catch(error){
            console.log(error)
        }
    }
    
    return {cards,deleteCards}
}
