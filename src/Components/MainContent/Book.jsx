import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddToCart from "../Functions/AddToCart";
import { allBooks } from "../Products/mangaProducts";
import { useParams } from "react-router-dom";
import imgNotFound from "../../assets/img-notfound.jpg"
import StarRating from "../Products/starRating";
import Cart from "./Cart";
import { FaBarcode } from "react-icons/fa";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { GiWeight } from "react-icons/gi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiRefund2Fill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";

function Book({onAddtoCart}) {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const [cartAddedd, setCartAdded] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [cart, setCart] = useState(0)
  const [added, setAdded] = useState(false);
  useEffect(() => {
    const foundBook = allBooks.find((book) => book.id == id)
    if (foundBook) {
      setBook(foundBook)
    }
  }, [id])

  const handleAdd = () => {
    setAdded(true)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000);
  }

  const handleAddTocart = () => {
    if (!cartAddedd) {
      onAddtoCart?.() // ✅ call the function from props
      setCartAdded(true);
    }
  }
  return (
    <div className=" text-white  ml-[200px] mt-[100px]">
      <div className="flex flex-col">
        {/* book details */}
        <div className="flex">

          <div>
            <img
              src={book.image}
              className="w-[200px] h-[300px] rounded-2xl object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = imgNotFound;
              }}
              alt={book.name}
            />
          </div>
          <div className="flex">
            <div
              className="flex flex-col ml-[30px] mt-[5px]"
            >
              <div
                className="flex flex-col gap-4">
                <div
                  className=" flex gap-2 items-baseline"
                >

                  <span
                    className="text-3xl font-semibold text-orange-700"
                  >
                    {book.name}
                  </span>

                  <span>
                    {`(${book.language ? book.language : "English"})`}
                  </span>

                  <span>
                    {`(${book.binding ? book.binding : "Paperback"})`}
                  </span>
                  <span>
                    - {book.release ? book.release : "2025"}
                  </span>

                </div>

                <div className="flex">
                  <div
                    className="flex items-center gap-2"
                  >
                    <span
                      className="font-semibold text-[18px]"
                    >
                      By:
                    </span>

                    {/* Author */}
                    <span className="text-[18px] font-semibold text-blue-500 hover:underline">
                      {book.author}
                    </span>
                    <span className="text-[15px]">
                      (Author)
                    </span>
                    {book.illustrator &&
                      <div
                        className="flex items-center gap-2"
                      >
                        <span
                          className="text-[18px] font-semibold text-blue-500 hover:underline"
                        >
                          {book.illustrator}

                        </span>
                        <span
                          className="text-[16px] "
                        >
                          (illustrated)
                        </span>
                      </div>
                    }

                    {
                      book.publisher &&
                      <div
                        className="flex items-center gap-2"
                      >
                        <span
                          className="text-[18px] font-semibold text-blue-500 hover:underline"
                        >
                          {book.publisher}
                        </span>
                        <span
                          className="text-[16px] "
                        >
                          (Publisher)
                        </span>
                      </div>
                    }

                  </div>
                </div>

                <div
                  className="text-xl ml-[10px]"
                >
                  {book.rating != null && (
                    <StarRating rating={book.rating} />
                  )}
                </div>

                {/* MRP s */}
                <div
                  className="ml-[10px]"
                >
                  <div
                    className="flex text-3xl text-red-500 font-semibold font-mono">
                    ₹{book.price}
                  </div>

                </div>

                <div
                  className="ml-[10px]"
                >
                  {book.stock > 0 ? (
                    <div
                      className="flex text-xl text-green-400"
                    >
                      Avilable
                    </div>
                  ) : (
                    <div
                      className="flex text-xl text-red-400"
                    >
                      Out of Stock
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* book physical details */}
        <div
          className="flex justify-center "
        >
          <div
            className="flex flex-row justify-center gap-19 border-gray-400 border-t border-b px-[20px] py-[10px] mt-10"
          >
            <div className="flex flex-col justify-center items-center gap-3 ">
              <span>
                ISBN-10
              </span>
              <span className="text-3xl">
                <FaBarcode />
              </span>
              <span>
                {book.isbn10 ? book.isbn10 : "1234567891011"}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <span>
                ISBN-13
              </span>
              <span className="text-3xl">
                <FaBarcode />
              </span>
              <span>
                {book.isbn13 ? book.isbn13 : "1234567891011"}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <span>
                Page No.
              </span>
              <span className="text-3xl">
                <HiOutlineDocumentDuplicate />
              </span>
              <span>
                {book.pages ? book.pages : "-"}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <span>
                Weight
              </span>
              <span className="text-3xl">
                <GiWeight />
              </span>
              <span>
                {book.weight ? book.weight : "-"}
              </span>
            </div>

          </div>
        </div>
        {/* website service quality */}
        <div className="flex flex-row justify-center gap-20 mt-20">
          <div className="flex flex-col">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
              <MdOutlineWorkspacePremium />
            </span>
            <span className="text-blue-400 text-sm font-semibold">
              Premium quality
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
              <TbTruckReturn />
            </span>
            <span className="text-blue-400 text-sm font-semibold">
              Easy returns
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
              <LiaCertificateSolid />
            </span>
            <span className="text-blue-400 text-sm font-semibold">
              Certified product
            </span>
          </div>
          <div className="flex flex-col w-[120px]">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
              <RiRefund2Fill />
            </span>
            <span className="text-center text-blue-400 text-sm font-semibold">
              Money back gurantee
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
            <FaTruckFast />
            </span>
            <span className="text-blue-400 text-sm font-semibold">
              Fast delivery
            </span>
          </div>
        </div>

        {/* buttons */}
        <div className='text-white mt-10 flex justify-center'>
          <div className="flex flex-col gap-2 border border-gray-700 bg-gray-900 px-[80px] py-[50px] rounded-lg">

            <Link className='flex justify-center  bg-green-700 text-xl font-semibold px-6 py-2 rounded-md  w-[300px] hover:bg-green-600'
              to={`/buy/${book.id}`}
            >
              Buy Now
            </Link>

            {!cartAddedd ? (
              <button className='flex justify-center bg-yellow-500 text-xl font-semibold px-6 py-2  w-[300px] hover:bg-yellow-400 rounded-md'
                onClick={() => {
                  AddToCart(book);     // 💥 pass book here!
                  handleAddTocart();     // 📦 update UI state
                }}
              >
                Add to cart
              </button>
            ) : (
              <span className='flex justify-center text-green-400 font-semibold py-2 text-sm  w-[300px]'>Added to cart</span>
            )}



            {!added && (
              <button
                className='flex justify-center bg-white text-black text-xl font-semibold px-6 py-2 rounded-md  w-[300px] hover:bg-gray-200'
                onClick={handleAdd}
              >
                Add to Wishlist
              </button>
            )}
            {showMessage && (
              <span className="flex justify-center text-green-400 font-semibold text-sm  w-[300px]">
                ✅ Added to wishlist!
              </span>
            )}
          </div>



        </div>

        <div className="mt-[50px] px-[100px] mb-[50px]">
          <div className="px-[20px] border-t border-b border-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Earum facilis ipsa qui ad maxime nobis voluptatibus tempora quasi explicabo laudantium
              ratione fuga suscipit, veniam ipsum culpa enim aut eius beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Book