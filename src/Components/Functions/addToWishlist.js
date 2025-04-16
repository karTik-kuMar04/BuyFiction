import { wishList } from "../Products/mangaProducts"

function addToWList(book) {
  const existingBook = wishList.find(item => item.id === book.id)

  if(!existingBook){
    wishList.push(book)
  }
}

export default addToWList