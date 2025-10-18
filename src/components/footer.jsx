'use-client'

import Image from 'next/image'
import Link from 'next/link';



const Footer = () => {
    const scrollToSection = (href) => {
        // Check if we're in the browser environment
        if (typeof window !== 'undefined') {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

  return (
    <footer className='flex flex-col py-10 md:px-[100px] items-start self-stretch bg-mid'>
        <div className='flex flex-col items-start self-stretch gap-2.5'>
            <div className='flex items-center gap-20 md:gap-[11vw] self-stretch px-3'>
                <div className='flex flex-col items-start md:w-[20vw] justify-start'>
                  <Image src={'/Echo Logo.png'}  alt='Echo Logo' width={101} height={29} className='mix-blend-difference'/>
                  <p className='text-[14px] leading-6 -tracking-[.09px]'>Let&apos;s build the future together, with the right tool.</p>
                </div>
                <ul className="flex flex-col md:flex-row items-center md:items-start gap-8 min-w-fit">
                    <li className="text-center cursor-pointer" onClick={scrollToSection("#Home")}>Home</li>
                    <li className="text-center cursor-pointer" onClick={scrollToSection("#Features")}>Features</li>
                    <li className="text-center cursor-pointer" onClick={scrollToSection("#HowItWorks")}>How it works</li>
                </ul>
            </div>

            <div className='w-full h-[1px] border-t-[1px]' />

            <div className='flex flex-col md:flex-row gap-3 justify-between items-center w-full'>
                <p className='text-[12px] leading-5 tracking-[.01px]'>Copyright &copy;2025 <a href="mailto:contact@echo-ng.com">contact@echo-ng.com</a></p>
                <ul className='flex justify-center items-start gap-3 shrink-0'>
                    <li className='rounded-full bg-light p-2 border-[1px] border-[#E9EBF1]'>
                        <Link href={''}>
                            <Image src={'/icons/facebook.svg'} alt='facebook Icon' width={24} height={24} />
                        </Link>
                    </li>
                    <li className='rounded-full bg-light p-2 border-[1px] border-[#E9EBF1]'>
                        <Link href={''}>
                            <Image src={'/icons/twitter.svg'} alt='facebook Icon' width={24} height={24} />
                        </Link>
                    </li>
                    <li className='rounded-full bg-light p-2 border-[1px] border-[#E9EBF1]'>
                        <Link href={''}>
                            <Image src={'/icons/instagram.svg'} alt='facebook Icon' width={24} height={24} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer