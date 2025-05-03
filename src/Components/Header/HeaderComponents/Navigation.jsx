import { NavLink, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaSearch, FaBook, FaRegHeart, FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import { cartProduct } from "../../Products/mangaProducts";

function NavigationBtn() {
  
  const [cartCount, setCartCount] = useState(0);

  // Fetch cart count from localStorage
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCartCount(); // initial load

    // Optional: listen for localStorage updates
    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdate); // 👈 listen to custom event

    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const navItems = [
    { path: "/home", icon: <HiHome />, label: "Home" },
    // { path: "/search", icon: <FaSearch />, label: "Search" },
    { path: "/cart", icon: <FaBook />, label: "Cart", badge: cartCount},
    { path: "/wishlist", icon: <FaRegHeart />, label: "WishList" },
    { path: "/user", icon: <FaUser />, label: "My Space" },
  ];

  return (
    <div
     className="mt-4"
    >
      <div className="flex flex-row gap-4">
        {navItems.map(({ path, icon, label, badge }) => {
          
          return (
            <div
              key={path}
            >

              <div className="flex flex-col ">
                <NavLink
                  className=""
                  to={path}
                >

                  <div className="flex justify-center w-[70px] h-[30px] relative">
                    <div
                      className="text-2xl "
                    >
                      {icon}
                    </div>

                    {badge > 0 && (
                      <span className="flex justify-center items-center absolute -top-3 right-2 text-white text-[12px] font-semibold w-[20px] h-[20px] rounded-full bg-red-600">
                        {badge}
                      </span>
                    )}
                  </div>

                  {label && (
                    <div
                      className="flex justify-center"
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

export default NavigationBtn;
