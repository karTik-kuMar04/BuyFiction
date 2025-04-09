import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="flex">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
  
    </div>
  );
}

export default App;
