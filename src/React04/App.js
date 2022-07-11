import { Route,Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Create from "./Create";
const App=()=>{
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/create/:id" element={<Create/>}/>
        </Routes>
    )
}
export default App;