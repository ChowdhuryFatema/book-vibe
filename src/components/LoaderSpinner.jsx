import { FadeLoader } from "react-spinners";

const LoaderSpinner = () => {
    return (
        <div className="flex flex-col justify-center items-center py-10">
            <FadeLoader color="#36d7b7" />
        </div>
    );
};

export default LoaderSpinner;