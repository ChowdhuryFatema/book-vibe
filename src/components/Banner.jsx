import { Link } from 'react-router-dom';
import bannerImg from './../assets/banner.png';

const Banner = () => {
    return (
      <div className='mx-5'>
          <div className='bg-[#1313130D] min-h-100vh max-w-7xl mx-auto rounded-2xl py-10 md:py-16 mx-5-auto'>
            <div className='flex lg:flex-row justify-center lg:justify-start items-center flex-col-reverse'>
                <div className='flex-1 lg:pl-20 p-5 mt-5 lg:mt-0'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-[40px] md:leading-[60px]  lg:leading-[70px]'>Books to freshen <br /> up your bookshelf</h2>
                    <Link to='/listed-books' className="btn md:text-lg text-white bg-[#23BE0A] hover:bg-[#40df28] me-2 md:mt-10 mt-5">View The List</Link>
                </div>
                <div className='flex-1 flex justify-center'>
                    <div className='w-1/2 md:w-full'>
                    <img src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Banner;