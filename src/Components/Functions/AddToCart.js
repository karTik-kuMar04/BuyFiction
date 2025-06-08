import { toast } from'react-hot-toast';
export default function AddToCart(book) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingIndex = cart.findIndex(item => item.id === book.id);

  if (existingIndex !== -1) {
    // Optional: update quantity if needed
    cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // 👇 trigger update in nav
  window.dispatchEvent(new Event("cartUpdated"));

  toast.success(`${book.name} added to cart!`);
}
