import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../utlis/localStorage";
import BookCard from "./BookCard";



const ReadBooks = () => {

    const books = useLoaderData()
    const [displayReadBooks, setDisplayReadBooks] = useState([]);
    // console.log(books.length)

    useEffect(() => {
        if(books.length){
            const storedReadBook = getStoredBooks();

            const saveCart = [];
            for(const id of storedReadBook){
                const readBook = books.find(b => b.bookId == id)

                console.log(readBook)
                if(readBook){
                    saveCart.push(readBook);
                }
            }

            setDisplayReadBooks(saveCart);
        }
    }, [books])

    return (
        <div className="grid grid-cols-3 gap-8">
          {
            displayReadBooks.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
          }
        </div>
    );
};

export default ReadBooks;