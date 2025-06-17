import React, { useEffect } from 'react';

function Toast({ message, onClose, type = "success" }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-md shadow-lg text-white transition-all
      ${type === "success" ? "bg-green-600" : "bg-red-600"}`}>
      {message}
    </div>
  );
}

export default Toast;
