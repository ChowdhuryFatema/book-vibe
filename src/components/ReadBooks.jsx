import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../utlis/localStorage";
import ReadCard from "./ReadCard";



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

                if(readBook){
                    saveCart.push(readBook);
                }
            }

            setDisplayReadBooks(saveCart);
        }
    }, [books])

    return (
        <div>
          {
            displayReadBooks.map(book => <ReadCard key={book.bookId} book={book}></ReadCard>)
          }
        </div>
    );
};

export default ReadBooks;