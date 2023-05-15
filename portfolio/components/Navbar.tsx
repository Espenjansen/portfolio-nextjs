import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-100'>
            <div className='flex justify-between items-center w-full h-full px-2 xl:px-16'>
                <Image src="/img/E.png" alt="/" width="125" height="50" />
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href="/">About</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href="/">Skills</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href="/">Projects</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                    <div className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className='fixed left-0 top-0 w-full h-screen bg-black bg-opacity-70'>
                <div className='fixed left-0 top-0 w-3/4 sm:w-60% md:w-45% h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
                    <div className='flex w-full items-center justify-between'>
                        <Image src="/img/E.png" alt="/" width="87" height="35" />
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div>
                        <p>Let's build something legendary together</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;










// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


// const Navbar = () => {
//     return (
//         <div className='fixed w-full h-20 shadow-xl z-[100]'>
//             <div className='flex justify-between items-center w-full h-full px-2 z-2xl:px-16'>
//                 <Image src="/../public/img/E.png"
//                 alt="/" 
//                 width="125"  
//                 height="50" />
//                 <div>
//                     <ul className='hidden md:flex'>
//                         <Link href="/">
//                             <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
//                         </Link>
//                         <Link href="/">
//                             <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
//                         </Link>
//                         <Link href="/">
//                             <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
//                         </Link>
//                         <Link href="/">
//                             <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
//                         </Link>
//                         <Link href="/">
//                             <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
//                         </Link>
//                     </ul>
//                     <div className='md:hidden'>
//                         <AiOutlineMenu size={25} />
//                     </div>
//                 </div>
//             </div>

//             <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
//                 <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'></div>
//                     <div>
//                         <div className='flex w-full items-center justify-between'>
//                             <Image src="/../public/img/E.png" alt="/" width="87" height="35" />
//                             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
//                                 <AiOutlineClose />
//                             </div>
//                         </div>
//                     <div>
//                         <p>Let's build something legendary together</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar
