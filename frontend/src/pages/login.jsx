import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Login(){
      //const[email, setEmail] = useState("");
  //const[password, setPassword] = useState("");
      const location=useLocation();
  const navigate=useNavigate();
  const [logindata,setLogindata]=useState({
    username:"",
    password:""
  })
  function handlechange (e) {

    e.preventDefault();
    setLogindata({...logindata,
      [e.target.name]:e.target.value})
  }

  const handleSubmit=(Event)=>{
    Event.preventDefault();
    const registerdata=location.state
    if(registerdata.name===logindata.username&&registerdata.password===logindata.password){
      console.log("if success")
      navigate("/dashboard",{state:logindata})
    }else{
      console.log("invalid")
    }


  }



    return(
        /* <div className="text-blue-500">HI </div>

        <input type="email" required placeholder="Enter your email" value={email} onChange={(param) => setEmail(param.target.value)} />
        <input type="password" required placeholder="Enter your password" value={password} onChange={(param) => setPassword(param.target.value)} />
        <button type="sumbit" onClick={()=>print()}>sumbit</button>} */
        <div className="min-h-screen flex items-center align-center ">
          <div className="bg-blue-200 p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h1 className="text-2xl text-center font-bold mb-4">Login to your Account</h1>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray">Enter Your Username</label>
        <input type="text" required placeholder="Enter your username" name="username" onChange={handlechange} />
        <input type="password" required placeholder="Enter your password" name="password" onChange={handlechange} />
        <button type="submit" >submit</button>
      </form>
      </div>
      </div>
      )
} export default Login;

