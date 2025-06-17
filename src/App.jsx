import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/";

  return (
    <div className="flex flex-col">
      {!hideHeaderFooter && < Header />}
      <div>
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      {!hideHeaderFooter && <Footer />}
  
    </div>
  );
}

export default App;
