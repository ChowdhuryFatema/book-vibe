import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks,  saveToLocalStorage, saveWishListToLocalStorage } from "../utlis/localStorage";
import { toast } from "react-toastify";


const BookDetails = () => {

    const { id } = useParams();
    const books = useLoaderData();
    const book = books.find(book => book.bookId == id)
    const {
        image,
        tags, bookName,
        author, category,
        rating, review,
        totalPages, publisher,
        yearOfPublishing } = book;

        const handleRead = () => {
            saveToLocalStorage(id)
        }
        const handleWishlist = () => {

            const storedReadBook = getStoredBooks();

            const exists = storedReadBook.find(b => b == id)
            if( exists ){
                return toast.error("You have Already Read this Book");
            }

            saveWishListToLocalStorage(id)
        }

    return (
        <div className="max-w-7xl mx-auto px-5 dark:bg-gray-100 dark:text-gray-900 my-10">
            <div className="container grid grid-cols-12 mx-auto lg:gap-x-10 gap-y-5 lg:gap-y-0">
                <div className="flex flex-col justify-center col-span-12 items-center lg:col-span-6 bg-[#1313130D] rounded-xl">
                    <img className="py-10 md:w-1/3 lg:w-72 object-cover" src={image} alt="" />
                </div>
                <div className="flex flex-col col-span-12 divide-y lg:col-span-6 dark:divide-gray-300">
                    <div className="pb-4 space-y-2">
                        <h1 className="text-2xl md:text-3xl font-bold">{bookName}</h1>
                        <p className='text-[#131313CC] text-xl pt-3 font-semibold'>By : {author}</p>
                    </div>
                    <div className="pt-3 pb-3 space-y-1">

                        <p className="text-xl font-semibold text-[#131313CC]">{category}</p>
                    </div>
                    <div className="pt-3 pb-4 space-y-5">
                        <p><span className="font-bold text-[#131313]">Review :</span> {review}</p>
                        <ul className='flex flex-wrap gap-2 pt-4'> <span className="font-bold text-[#131313]">Tag</span>
                            {
                                tags.map((tag, idx) => <a className='py-1 px-3 rounded-full bg-[#23BE0A0D] text-[#23BE0A]' key={idx}>#{tag}</a>)
                            }
                        </ul>
                    </div>
                    <div className="pt-6 pb-4 space-y-3">
                        <table>
                           <tbody>
                           <tr>
                                <td className="pr-8 text-[#131313B3]">Number of Pages:</td>
                                <td className="p-1 text-[#131313] font-semibold">{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="pr-8 text-[#131313B3]">Publisher:</td>
                                <td className="p-1 text-[#131313] font-semibold">{publisher}</td>
                            </tr>
                            <tr>
                                <td className="pr-8 text-[#131313B3]">Year of Publishing:</td>
                                <td className="p-1 text-[#131313] font-semibold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="pr-8 text-[#131313B3]">Rating:</td>
                                <td className="p-1 text-[#131313] font-semibold">{rating}</td>
                            </tr>
                           </tbody>
                        </table>
                       <div>


                        <a onClick={handleRead} className="btn text-lg me-3 border border-[#1313134D] bg-transparent">Read</a>


                        <a onClick={handleWishlist} className="btn text-lg text-white bg-[#59C6D2] hover:bg-[#12daf0]">Wishlist</a>


                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;