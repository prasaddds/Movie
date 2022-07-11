import React,{useState} from "react";
import UseState3 from "./UseState3";
function UseState4(){
    const [sub,changeSub]=useState("Comp");
    return (
        <div>
            <UseState3 subject={sub}/>
        </div>
    )
}
export default UseState4;