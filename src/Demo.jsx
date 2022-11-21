import React, { useEffect, useState } from 'react'

function Demo() {
    

    
    useEffect(()=>{
        fetch("https://6283ca4a38279cef71dc6090.mockapi.io/users").then(()=>{
            console.log("fetch")
            console.log("Hello")
        })

    },[])

    useEffect(()=>{
        return ()=>{
            console.log("Destroy")
        }
    },[])

  
    
    const [timer, setTimer] = useState(0)
    console.log("Timer Update")
    useEffect(()=>{

    },[timer])

  return (
    <div>
    <button onClick={()=>setTimer(timer + 1)}>+</button>
    {timer}
    <button onClick={()=>setTimer(timer -1)}>-</button>
    </div> 
  )
}

export default Demo