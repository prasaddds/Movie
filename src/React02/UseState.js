import React,{useState} from "react";
import Counter from "./Counter";
function UseState(){
    const [name,setName]=useState("Bokka");
    function HandleChange(){
        let newName=name=="Ganga"?"Bokka":"Ganga";
        setName(newName);
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={HandleChange}>Button</button>
            <Counter/>
        </div>
    )
}
export default UseState;