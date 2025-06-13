export default function addToWList(book) {
  const storedList = localStorage.getItem('wishlist');
  const wishlist = storedList ? JSON.parse(storedList) : [];

  const alreadyExists = wishlist.some(item => item.id === book.id);
  if (!alreadyExists) {
    wishlist.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated")); // 👈 Notify other components
  }
}
