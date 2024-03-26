import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const BookCard = ({book}) => {
    const {
        bookId, image, 
        tags, bookName, 
        author, category, 
        rating} = book;

    return (
        <Link to={`/book/${bookId}`} className="flex flex-col dark:bg-gray-50 border border-[#13131326] rounded-2xl p-4">
            <a>
                <img alt="" className="w-full rounded-2xl h-60 dark:bg-gray-500 object-cover" src={image} />
            </a>
            <div className="flex flex-col flex-1 py-5 space-y-2">
                <ul className='flex flex-wrap gap-2'>
                    {
                        tags.map((tag, idx) => <a className='py-1 px-3 rounded-full bg-[#23BE0A0D] text-[#23BE0A]' key={idx}>#{tag}</a>)
                    }
                </ul>
               

                <h3 className="flex-1 py-2 text-xl font-bold leading-snug">{bookName}</h3>
                <p className='text-[#131313CC]'>By: {author}</p>
                <div className="flex flex-wrap justify-between border-t border-dashed pt-4 mt-4 space-x-2 text-xs dark:text-gray-600">
                    <span className='text-[16px] text-[#131313CC]'>{category}</span>
                    <p className='flex items-center gap-1'>
                        <span className='text-[16px]'>{rating}</span> 
                        <FaRegStar size={20} />
                    </p>
                </div>
            </div>
        </Link>
    );
};

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
}
export default BookCard;