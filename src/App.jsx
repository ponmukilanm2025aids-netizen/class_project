import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/login'
import Projects from '../src/pages/projects'
import Tasks from "./pages/tasks"
import Calendar from "./pages/calendar"
import Client from "./pages/client"
import Settings from "./pages/settings"
import Team from "./pages/team"
import Dashboard from "./pages/dashboard"

function App(){
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/"element={<Login/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/tasks" element={<Tasks/>}/>
    <Route path="/calendar" element={<Calendar/>}/>
    <Route path="/client" element={<Client/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/team" element={<Team/>}/>
  </Routes>

  </BrowserRouter>
  )
}

export default App;
