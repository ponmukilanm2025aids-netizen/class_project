import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    //function displaydata(){
        //setUserdata(location.state);
        //console.log(userdata)

    //}
    const[check,setCheck]=useState(0)
    useEffect(()=>{
        setUserdata(location.state)
        console.log(userdata)
    },[])
    return (
        <>
        <button onClick={()=>setCheck(check+1)}>button</button>

        </>
      );
}

export default Dashboard;
