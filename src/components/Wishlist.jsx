import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../utlis/localStorage";
import ReadCard from "./ReadCard";


const Wishlist = () => {

    const books = useLoaderData()
    const [displayWishlist, setDisplayWishlist] = useState([]);

    useEffect(() => {
        
        if(books.length){
            const storedWishlist = getStoredWishList();
            const wishlistCart = [];
            for(let id of storedWishlist){
                const book = books.find(b => b.bookId == id)
                if(book){
                    wishlistCart.push(book);
                }
            }
            setDisplayWishlist(wishlistCart);
        }

    }, [books]);


    return (
        <div>
            {
            displayWishlist.map((book, idx) =>  <ReadCard 
            key={idx}
            book={book}></ReadCard>)
          }
        </div>
    );
};

export default Wishlist;