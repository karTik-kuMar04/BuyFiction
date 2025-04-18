import { NavLink, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaSearch, FaBook, FaRegHeart, FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import { cartProduct } from "../Products/mangaProducts";

function Header() {
  
  const [cartCount, setCartCount] = useState(cartProduct.length)
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(()=>{
    const interval = setInterval(()=> {
      if(cartProduct.length !== cartCount) {
        setCartCount(cartProduct.length)
      }
    }, 500)
    
    return () => clearInterval(interval);
    
  },[cartCount])

  const navItems = [
    { path: "/home", icon: <HiHome />, label: "Home" },
    { path: "/search", icon: <FaSearch />, label: "Search" },
    { path: "/cart", icon: <FaBook />, label: "Cart", badge: cartCount},
    { path: "/wishlist", icon: <FaRegHeart />, label: "WishList" },
    { path: "/user", icon: <FaUser />, label: "My Space" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full transition-transform duration-800 bg-[#000000] hover:bg-[#23222263] z-50 shadow-lg ${
        isExpanded ? "w-[200px]" : "w-[70px]"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col gap-6 mt-16 pt-4">
        {navItems.map(({ path, icon, label, badge }) => {
          const isActive = location.pathname === path;
          return (
            <div className="text-white" key={path}>
              <div className="flex items-center ml-4">
                <NavLink
                  className="relative flex items-center group p-2"
                  to={path}
                >
                  <div className="absolute inset-0 bg-white opacity-20 w-10 h-10 blur-md scale-125 hidden group-hover:block"></div>

                  <div className="relative">
                    <div
                      className={` text-2xl ${
                        isActive || isExpanded
                          ? "text-white drop-shadow-[0_0_6px_white]"
                          : "text-white"
                      }`}
                    >
                      {icon}
                    </div>

                    {badge > 0 && (
                      <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {badge}
                      </span>
                    )}
                  </div>

                  {isExpanded && (
                    <div
                      className={`ml-4 text-[18px] font-bold ${
                        isActive
                          ? "text-white drop-shadow-[0_0_6px_white]"
                          : "text-white"
                      }`}
                    >
                      {label}
                    </div>
                  )}
                </NavLink>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
