import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="text-center">
           <details className="dropdown mt-5">
                <summary className="m-1 btn text-white bg-[#23BE0A] hover:bg-[#37ce20] text-lg">Sort By
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>

                </ul>
            </details>
           </div>


            <div className="flex items-center overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800 my-5">
                <Link 
                to=''
                onClick={() => setTabIndex(0)}
                rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-900 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link 
                to={`Wishlist`}
                 onClick={() => setTabIndex(1)}
                rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-900 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <div className="my-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;