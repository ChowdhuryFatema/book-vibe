import { Link } from 'react-router-dom';
import ErrorImg from './../assets/page-not-found.png';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <img className='w-1/3' src={ErrorImg} alt="" />
            <div className='flex gap-5 mt-5'>
                <Link to={-1} className="btn text-xl text-white bg-[#23BE0A] hover:bg-[#40df28] px-10">Go Back</Link>
                <Link to='/' className="btn text-xl text-white bg-[#59C6D2] hover:bg-[#12daf0] px-10">Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;

