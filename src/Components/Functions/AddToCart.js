import { cartProduct } from "../Products/mangaProducts";

const AddToCart = (book) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const isAlreadyInCart = cart.find(item => item.id === book.id);

  if (!isAlreadyInCart) {
    const updatedCart = [...cart, { ...book, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Added to Cart");
  } else {
    alert("Already in cart");
  }
};

export default AddToCart;