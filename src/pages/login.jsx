import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
      //const[email, setEmail] = useState("");
  //const[password, setPassword] = useState("");
  const [formdata,setFormdata]=useState({
    username:"",
    password:""
  })
  function handlechange (e) {
    e.preventDefault();
    setFormdata({...formdata,
      [e.target.name]:e.target.value})
  }

  const handleSubmit=(Event)=>{
    Event.preventDefault();
    const navigate=useNavigate();
    console.log("login",formdata)
    alert("login succefully")
    navigate("/dashboard",{state:formdata})

  }



    return(
        /* <div className="text-blue-500">HI </div>

        <input type="email" required placeholder="Enter your email" value={email} onChange={(param) => setEmail(param.target.value)} />
        <input type="password" required placeholder="Enter your password" value={password} onChange={(param) => setPassword(param.target.value)} />
        <button type="sumbit" onClick={()=>print()}>sumbit</button>} */
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Enter your username" name="username" onChange={handlechange} />
        <input type="password" required placeholder="Enter your password" name="password" onChange={handlechange} />
        <button type="submit" >submit</button>
      </form>)
} export default Login;

