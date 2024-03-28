import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../utlis/localStorage";
import ReadCard from "./ReadCard";
import EmptyState from "./EmptyState";



const ReadBooks = () => {

    const books = useLoaderData()
    const [displayReadBooks, setDisplayReadBooks] = useState([]);
    const [sortedRating, setSortedRating] = useState([]);
    const [sortedTotalPages, setSortedTotalPages] = useState([]);
    const [sortedPublishYear, setSortedPublishYear] = useState([]);
    
    
    useEffect(() => {
        if (books.length) {
            const storedReadBook = getStoredBooks();
            const saveCart = [];
            for (const id of storedReadBook) {
                const readBook = books.find(b => b.bookId == id)

                if (readBook) {
                    saveCart.push(readBook);
                }
            }

            setDisplayReadBooks(saveCart);
        }
    }, [books])


    const handleRatingSort = () => {
        const sortRating =  displayReadBooks.sort((a, b) => b.rating - a.rating )
        setSortedRating(sortRating)
        
    }
    

    const handlePageNumSort = () => {
        const sortPages = displayReadBooks.sort((a, b) => b.totalPages - a.totalPages )
        setSortedTotalPages(sortPages)
    }

    const handlePublishYearSort = () => {
        const sortPublisherYear = displayReadBooks.sort((a, b) => 
        b.yearOfPublishing - a.yearOfPublishing)
        setSortedPublishYear(sortPublisherYear)
    }

    if(displayReadBooks.length < 1){
        return (
            <EmptyState 
            message={"You haven't read any book"}
            address={`/`}
            label={'Go Home'}
            ></EmptyState>
        )
    }

    return (
        <div>

            {
                displayReadBooks.length > 0 &&
                <div className="text-center">
                <details className="dropdown mb-5">
                    <summary className="m-1 btn text-white bg-[#23BE0A] hover:bg-[#37ce20] md:text-lg">Sort By
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleRatingSort(sortedRating)}><a>Rating</a></li>

                        <li onClick={() => handlePageNumSort(sortedTotalPages)}><a>Number of pages</a></li>

                        <li onClick={() => handlePublishYearSort(sortedPublishYear)}><a>Publisher year</a></li>

                    </ul>
                </details>
            </div>
            }

            

            {
                displayReadBooks.map(book => <ReadCard key={book.bookId} book={book}></ReadCard>)
            }
        </div>
    );
};

export default ReadBooks;