import ClassSchedules from "./components/ClassSchedules";
import Layout from "./components/Layout";
import Dashboard from "./components/Layout";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<ClassSchedules />} />
      </Routes>
    </>
  )
}
export default App;