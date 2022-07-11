import React,{useState} from "react";
function UseState5(){
    const [menu,setMenu]=useState([
        {
            name:"Foot Item1",
            rating:5
        },
        {
            name:"Food Item 2",
            rating:4
        }
    ])
    // function function1(e){
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     let a=e.target.value;
    //     setMenu(...menu,menu.push(a))
    // }
    return <div>
        <h1>List Of Food Items</h1>
        {/* <input type="text" placeholder="Enter your task" onChange={function1}/> */}
        {menu.map((food,index)=>{
            return(
            <li key={index}>{food.name} and {food.rating}</li>
            )
        })}
    </div>
}
export default UseState5;