import { toast } from "react-toastify";

const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('read-books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveToLocalStorage = id => {
    const books = getStoredBooks();
    const exists = books.find(bookId => bookId == id );
    if(!exists){
        books.push(id);
        localStorage.setItem('read-books', JSON.stringify(books))

        toast.success("Books Added to Read List");
    }
    else {
        toast.error("You have Already Read this book");
    }
}
const getStoredWishList = () => {
    const storedBooks = localStorage.getItem('wishlist');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveWishListToLocalStorage = id => {
    const books = getStoredWishList();
    const exists = books.find(bookId => bookId == id );
    if(!exists){
        books.push(id);
        localStorage.setItem('wishlist', JSON.stringify(books))

        toast.success("Books Added to WishList");
    }
    else {
        toast.error("Already Added to WishList");
    }
    
}

export {
    getStoredBooks, 
    saveToLocalStorage, 
    getStoredWishList,
    saveWishListToLocalStorage}