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
        <div className="max-w-7xl mx-auto px-5 dark:bg-gray-100 dark:text-gray-900">
            <div className="container grid grid-cols-12 mx-auto">
                <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
                    <img className="rounded-xl" src={image} alt="" />
                </div>
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                    <div className="pt-6 pb-4 space-y-2">
                        <h1 className="text-3xl font-bold">{bookName}</h1>
                        <p className='text-[#131313CC]'>By: {author}</p>
                    </div>
                    <div className="pt-3 pb-3 space-y-1">

                        <p>{category}</p>
                    </div>
                    <div className="pt-3 pb-4 space-y-5">
                        <p><span>Review</span>{review}</p>
                        <ul className='flex gap-2 pt-4'> <span>Tag</span>
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