import { Link } from 'react-router-dom';
import ErrorImg from './../assets/page-not-found.png';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen px-5'>
            <img className='w-full md:w-1/3' src={ErrorImg} alt="" />
            <div className='flex gap-5 mt-5'>
                <Link to={-1} className="btn text-sm md:text-xl text-white bg-[#23BE0A] hover:bg-[#40df28] lg:px-10">Go Back</Link>
                <Link to='/' className="btn text-sm md:text-xl text-white bg-[#59C6D2] hover:bg-[#12daf0] lg:px-10">Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;

