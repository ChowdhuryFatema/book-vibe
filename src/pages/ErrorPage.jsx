import { Link } from 'react-router-dom';
import ErrorImg from './../assets/not-found.png';

const ErrorPage = () => {
    return (
        <div>
            <img src={ErrorImg} alt="" />
            <Link to={-1} className="btn text-lg text-white bg-[#23BE0A] hover:bg-[#40df28] me-2 mt-10">Go Back</Link>
        </div>
    );
};

export default ErrorPage;