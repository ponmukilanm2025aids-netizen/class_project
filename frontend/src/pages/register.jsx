import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/formschema/registerschema";
import{ useForm } from "react-hook-form";
import{zodResolver} from "@hookform/resolvers/zod";


function Register(){

    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){

        console.log(data)
        alert("register sucess")
        navigate("/",{state:data})
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit1)}className="space-y-4">
            <h1 className="text-1xl font-bold text-blue-600  text-center mb-2">Register to your Account</h1>
            <p className="text-yellow-500 text-center mb-6">Create your Account</p>
            <label className="block text-sm font-medium text-gray-500 mb-2">Username:</label>
        <input type="text" required placeholder="Enter your name" name="username" {...register("name")}className="w-full border border-gray-300 rounded-lg px-4 py-3"/>
        <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
        <label className="block text-sm font-medium text-gray-500 mb-2">Enter Your Email</label>
         <input type="email" required placeholder="Enter your email" name="email" {...register("email")  }className="w-full border border-gray-300 rounded-lg px-4 py-3"/>
        <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        <label className="block text-sm font-medium text-gray-500 mb-2">Enter Your Password</label>
         <input type="password" required placeholder="Enter your password" name="password" {...register("password")}className="w-full border border-gray-300 rounded-lg px-4 py-3"/>
        <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
        <label className="block text-sm font-medium text-gray-500 mb-2">Enter Your Age</label>
         <input type="age" required placeholder="Enter your age" name="age" {...register("age")}className="w-full border border-gray-300 rounded-lg px-4 py-3"/>
        <p className="text-red-500 text-sm mt-1">{errors.age?.message}</p>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300">Submit</button>

      </form>
      </div>
      </div>

    )
}export default Register
