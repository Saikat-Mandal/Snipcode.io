import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Ask from "./pages/Ask";
import SingleQuestion from "./pages/SingleQuestion";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/ask" element={<Ask/>}/>
      <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="summary" element={<Summary/>} />
          <Route path="qa" />
          <Route path="settings"  element={<Settings/>} />
      </Route>
      <Route path="/question/:id" element={<SingleQuestion/>}/>
    </Routes>
  );
}

export default App;
