import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/register"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
