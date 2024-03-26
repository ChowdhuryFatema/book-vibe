import PropTypes from 'prop-types';
import { LuUsers } from "react-icons/lu";
import { MdOutlineRestorePage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ReadCard = ({ book }) => {
    const {
        image, bookName,
        author, tags,
        yearOfPublishing,
        publisher, totalPages,
        category, rating, } = book;

    return (
        <div className='max-w-5xl mx-auto px-5'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5 mb-5 border p-3 rounded-lg'>
                <div className='col-span-auto w-full md:col-span-4'>
                    <img className='rounded-lg w-full h-60 lg:h-72' 
                    src={image} alt="" />
                </div>
                <div className='col-span-auto md:col-span-8 mt-3'>
                    <div className='space-y-3 md:space-y-5'>
                        <h1 className="text-2xl md:text-3xl font-bold">{bookName}</h1>
                        <p className='text-[#131313CC] font-semibold'>By: {author}</p>
                        <div className='flex flex-col md:flex-row gap-x-10 gap-y-5'>
                            <ul className='flex flex-wrap gap-3'> <span className='font-bold'>Tag</span>
                                {
                                    tags.map((tag, idx) => <a className='py-1 px-2 md:px-3 rounded-full bg-[#23BE0A0D] text-[#23BE0A]' key={idx}>#{tag}</a>)
                                }
                            </ul>
                            <p className='flex items-center gap-1 text-sm text-[#131313CC]'><CiLocationOn size={20} /> Year Of Publishing :{yearOfPublishing}</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-10 gap-y-4">
                            <div className="flex items-center space-x-2 *:text-[#13131399] *:text-sm">
                            <LuUsers size={20} />
                                <span className="self-center text-sm">Publisher: {publisher}</span>
                            </div>
                            <span className="text-[#13131399] text-sm flex items-center gap-1">
                                <MdOutlineRestorePage size={20} /> Pages {totalPages}</span>
                        </div>
                        <hr />
                        <div className='flex flex-wrap gap-5 items-center'>                        
                        <button className="btn btn-sm rounded-full bg-sky-100 text-sky-500">Category: {category}</button>              
                        <button className="btn btn-sm rounded-full bg-red-100 text-red-500">Rating: {rating}</button>
                        <a className="btn text-white bg-[#23BE0A] hover:bg-[#40df28]">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadCard.propTypes = {
    book: PropTypes.object.isRequired,
}
export default ReadCard;