import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Footer(){
    
    return(
        <>
            <footer className='absolute bottom-0 left-0 h-[15vh] py-5 flex flex-col justify-center items-center bg-gray-800 text-white w-full'>
                <div className='flex gap-4 mb-2'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook size={30} /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram size={30} /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin size={30} /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter size={30} /></a>
                </div>
                <p className='text-center'>© 2025 LearningHub. All rights reserved.</p>
                <p className='text-center'>Privacy Policy | Terms of Service</p>
            </footer>
        </>
    );
}

export default Footer;