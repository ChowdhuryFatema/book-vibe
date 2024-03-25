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
    }
}

export {getStoredBooks, saveToLocalStorage}