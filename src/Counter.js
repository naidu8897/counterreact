import { useState } from "react";

function Counter(props){
    let[count,setCounter]=useState("")


    const incre=()=>{
       setCounter(count+props.uVal)
       console.log("inc..",count)
    }

    const res=()=>{
        setCounter(0)
        console.log("res...",count)
       
    }


    const decre=()=>{
        setCounter(--count)
        console.log("dec...",count)
    }

    return(
        <div>
            <h1>{}count</h1>
            <button onClick={()=>incre()}>incre</button>
            <button onClick={()=>res()}>reset</button>
            <button onClick={()=>decre()}>Decre</button>
        </div>
    )
}
Counter()


