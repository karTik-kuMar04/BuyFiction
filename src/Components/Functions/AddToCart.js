import { cartProduct } from "../Products/mangaProducts";

function AddToCart( book ) {
  // Check if the book is already in the cart
  const existingProduct = cartProduct.find(item => item.id === book.id);

  if (!existingProduct) {
    // Add new book to cart with quantity 1
    cartProduct.push({ ...book, quantity: 1 });
    console.log(`✅ Book "${book.name}" added to cart.`);
  } else {
    console.log(`⚠️ Book "${book.name}" is already in the cart.`);
  }

  console.log(cartProduct); // See the current state of the cart
}

export default AddToCart;