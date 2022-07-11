import { useEffect, useState } from "react";
import React from "react";
function UseEffect1(){
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    useEffect(()=>{
        console.log("useEffect triggered");
        document.addEventListener('mousemove',(e)=>{
            setx(e.clientX)
            sety(e.clientY)
        },[])
    })
    return(
        <div>
            <h1>Using useEffect x{x} y{y}</h1>
        </div>
    )
}
export default UseEffect1;