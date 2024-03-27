import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const EmptyState = ({ message, address, label }) => {
    return (
        <div className='flex flex-col justify-center items-center px-5 py-10 md:py-20'>
            <h3 className="text-3xl lg:text-4xl font-bold text-center">{message}</h3>
            <Link to={address} className='btn mt-8 text-sm md:text-lg text-white bg-[#23BE0A] hover:bg-[#40df28]'>{label}</Link>
        </div>
    );
};
EmptyState.propTypes = {
    message: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    label: PropTypes.string,
}
export default EmptyState;