"use client";

import EchoAnimation from "@/components/echo-animation";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useWaitlist } from "@/hooks/useWaitlist";

const HeroScreen = () => {
  const { email, setEmail, isLoading, message, isSuccess, submitToWaitlist } = useWaitlist();

  return (
    <section id="Home" className="max-w-screen md:px-10 lg:px-28 md:pt-8 flex flex-col space-y-[77px] items-center hero-bg">
      <Navbar />
      <main className="flex flex-col space-y-5 py-[5px] px-[3px] items-center justify-center">
        <h3 className="text-center font-medium text-main text-[12px]">Make Waves. Be heard.</h3>
        <div className="flex flex-col items-center gap-y-2.5 leading-[76.8px] md:leading-[76.8px]">
          <h1 className="text-center font-medium text-[32px] md:text-[58.25px] text-nowrap">A System,Tool & Voice</h1>
          <div className="flex space-x-3 items-center max-h-[84px]">
            <h1 className="text-center font-medium text-[32px] md:text-[58.25px]">that Listens</h1>
            <EchoAnimation/>
          </div>
        </div>
        <div className="flex flex-col items-center text-sub-text text-center text-[13px] font-normal px-4">
          <h4 className="leading-8">Let&apos;s build the future together, We don&apos;t just need a</h4>
          <h4>Voice - We Need a System That Listens</h4>
        </div>
        <form onSubmit={submitToWaitlist} className="flex justify-center gap-2.5 md:items-start self-stretch flex-col md:flex-row items-center">
          <div className="p-4 flex items-start rounded-full email-cta">
            <input 
              type="email" 
              name="email" 
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="mr-auto md:w-[23vw]"
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className=" p-2 md:px-[27px] md:py-[15px] bg-mid cursor-pointer rounded-[20px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Joining...' : 'Join the Waitlist!'}
          </button>
        </form>
        {message && (
          <div className={`text-center text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}
      </main>
      {/* Big Image */}
      <Image src={'/Test Image.png'} width={1216} height={865} alt="Leak of Echo" />
    </section>
  );
};

export default HeroScreen;
