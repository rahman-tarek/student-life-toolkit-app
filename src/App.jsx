import ClassSchedules from "./components/ClassSchedules";
import Layout from "./components/Layout";
import Dashboard from "./components/Layout";
import Header from "./components/Header";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import DashboardNav from "./components/DashboardNav";

const App = () => {
  return (
    <>
      <Header />
      <div className="md:flex md:flex-row">
        <DashboardNav />
        <Outlet />
      </div>
    </>
  )
}
export default App;