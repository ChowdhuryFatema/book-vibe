import contactImg from './../assets/contact.png'

const ContactUs = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row  max-w-screen-xl gap-8 px-8 py-5 lg:py-16 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">

            <form className="flex-1 space-y-6">
                <div>
                    <label className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="border-2 w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <input id="email" type="email" className="border-2 w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label className="text-sm">Message</label>
                    <textarea rows="3" className="border-2 w-full p-3 rounded dark:bg-gray-100"></textarea>
                </div>
                <button type="submit" className="text-white bg-[#23BE0A] hover:bg-[#40df28] w-full p-3 text-sm font-bold tracking-wide uppercase rounded">Send Message</button>
            </form>

            <div className='flex-1'>
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 mx-auto *:text-center mb-5">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Get in touch</h2>
                        <p className='text-sm md:text-lg'>Reach out to us easily via the contact form.</p>
                    </div>
                    <div>
                        <img src={contactImg} alt="" className="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;