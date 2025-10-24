"use client";

import Image from "next/image";
import { useWaitlist } from "@/hooks/useWaitlist";

const JoinWaitlistScreen = () => {
  const { email, setEmail, isLoading, message, isSuccess, submitToWaitlist } = useWaitlist();

  return (
    <section id="JOIN" className="flex flex-col items-start self-stretch px-[7.7vw] md:py-[138px] py-20 waitlist-bg">
        <main className="flex md:flex-col lg:flex-row justify-between items-center w-full flex-wrap gap-10 md:gap-0">
            <div className="flex flex-col items-start shrink-0 space-y-[13px] lg:w-[34vw] max-w-full">
                <h3 className="font-medium text-center w-full text-main text-[14px] md:leading-6 md:-tracking-[.18px]">Start building the future now!</h3>
                <h1 className="font-medium text-[28px] md:text-[43px] md:-tracking-[1.25px] md:leading-[36px]">Join the Wait-list Now!</h1>
                <h4 className="text-sub-text text-[16px] md:leading-8 md:-tracking-[.18px]">Experience the Echo difference and unlock the true potential</h4>
            </div>
            <div className="flex md:w-[50vw] lg:w-[32vw] flex-col items-start space-y-[22px] shrink-0 w-full">
                <form onSubmit={submitToWaitlist} className="flex self-stretch gap-4 w-full flex-col md:flex-row max-w-full">
                    <div className="flex items-center justify-center p-4 rounded-full shadow-[0px_0.4000000059604645px_1px_0px_rgba(102,109,128,0.20)] w-full  ">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="name@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                            className=" text-[16px] md:leading-normal w-full" 
                        />
                    </div>
                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="md:w-[12vw] flex items-center justify-center md:p-2 lg:p-0 bg-main rounded-full overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="text-center justify-center text-white text-base font-medium md:leading-tight">
                            {isLoading ? 'Joining...' : 'Join Now!'}
                        </span>
                    </button>
                </form>
                {message && (
                    <div className={`text-center text-sm w-full ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </div>
                )}
                <div className="flex items-center gap-[21px] self-stretch flex-col md:flex-row">
                    <div className="flex items-center gap-3">
                        <Image src={'/icons/check.png'} width={24} height={24} alt="check icon" />
                        <p className="text-[14px] font-medium md:leading-6 md:-tracking-[.18px]">Become the change you envision</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src={'/icons/check.png'} width={24} height={24} alt="check icon" />
                        <p className="text-[14px] font-medium md:leading-6 md:-tracking-[.18px]">No credit card required</p>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default JoinWaitlistScreen