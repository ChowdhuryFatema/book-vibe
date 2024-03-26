import { Link } from 'react-router-dom';
import ErrorImg from './../assets/page-not-found.png';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <img className='w-1/3' src={ErrorImg} alt="" />
            <Link to={-1} className="btn text-xl text-white bg-[#23BE0A] hover:bg-[#40df28] px-10 mt-5">Go Back</Link>
        </div>
    );
};

export default ErrorPage;