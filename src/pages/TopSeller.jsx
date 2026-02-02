import React, { useEffect, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'
import BookCard from './books/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export const TopSeller = () => {

    const [books, setBooks] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("Select a genre")

    const categories = ["Select a genre", "Business", "Fiction", "Adventure", "Horror"]

    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => {
                console.log("books data: ", data)
                setBooks(data)
            })
            .catch(err => console.error('Error fetching books:', err))
    }, [])


    const filterBooks = selectedCategory === "Select a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())
    console.log("filtered books: ", filterBooks)

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Seller</h2>

            {/* categories filtering*/}
            <div className="relative w-48">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white"
                >
                    <span>{selectedCategory}</span>
                    <HiChevronDown className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        <ul className="py-1">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => {
                                            setSelectedCategory(category)
                                            setIsOpen(false)
                                        }}
                                        className="w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100"
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {      
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1180: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        }
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper mt-6"
                >

                {
                    filterBooks.length > 0 && filterBooks.map((book, index) => (
                        <SwiperSlide  key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                     ))
                }

                </Swiper>
            </div>



        </div>
    )
}
