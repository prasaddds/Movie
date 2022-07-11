import React,{useState} from "react";
function UseState3(props){
    const [name,setName]=useState({
        name:"Durga Prasad",
        age:18
    })
    function changeName(newName)
    {
        setName((prev)=>{
            return {
                ...prev,
                name:newName,
            }
        })
    }
    return(
        <div>
            <h1>My nsme is {name.name} and my age is {name.age} and sub is {props.sub}</h1>
            <button onClick={()=>changeName("Kohli")}>Change</button>
        </div>
    )
    }
export default UseState3;