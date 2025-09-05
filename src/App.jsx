import ClassSchedules from "./components/ClassSchedules";
import Layout from "./components/Layout";
import Dashboard from "./components/Layout";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<ClassSchedules />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}
export default App;