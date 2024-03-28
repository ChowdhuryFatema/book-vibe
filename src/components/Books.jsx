import { useEffect } from "react";
import { useState } from "react";
import BookCard from "./BookCard";
import LoaderSpinner from "./LoaderSpinner";


const Books = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true) 
    

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
        setLoading(false)
    }, []);

    
   
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-[#131313]">Books</h2>
            </div>

           {
            loading ? <LoaderSpinner></LoaderSpinner> :
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
             </div>

           }
        </div>
    </section>
    );
};

export default Books;