import { Routes, Route, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col">
      < Header />
      <div>
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
  
    </div>
  );
}

export default App;
