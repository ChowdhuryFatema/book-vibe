import PropTypes from 'prop-types';

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
                    <img className='rounded-sm w-full h-60 lg:h-72' 
                    src={image} alt="" />
                </div>
                <div className='col-span-auto md:col-span-8 mt-3'>
                    <div className='space-y-3 md:space-y-5'>
                        <h1 className="text-2xl md:text-3xl font-bold">{bookName}</h1>
                        <p>By: <span className='font-bold'>{author}</span></p>
                        <div className='flex flex-col md:flex-row gap-x-10 gap-y-5'>
                            <ul className='flex flex-wrap gap-2'> <span>Tag</span>
                                {
                                    tags.map((tag, idx) => <a className='py-1 px-2 md:px-3 rounded-full bg-[#23BE0A0D] text-[#23BE0A]' key={idx}>#{tag}</a>)
                                }
                            </ul>
                            <p>Year Of Publishing :{yearOfPublishing}</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-10 gap-y-4">
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-600">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                </svg>
                                <span className="self-center text-sm">Publisher{publisher}</span>
                            </div>
                            <span className="text-xs">Pages {totalPages}</span>
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