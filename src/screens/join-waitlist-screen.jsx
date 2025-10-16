import Image from "next/image"

const JoinWaitlistScreen = () => {
  return (
    <section className="flex flex-col items-start self-stretch px-[7.7vw] md:py-[138px] waitlist-bg">
        <main className="flex justify-between items-center w-full">
            <div className="flex flex-col items-start shrink-0 space-y-[13px] md:w-[34vw]">
                <h3 className="font-medium text-main text-[14px] leading-6 -tracking-[.18px]">Start building the future now!</h3>
                <h1 className="font-medium text-[43px] -tracking-[1.25px] leading-[58px]">Join the Wait-list Now!</h1>
                <h4 className="text-sub-text text-[16px] leading-8 -tracking-[.18px]">Experience the Echo difference and unlock the true potential</h4>
            </div>
            <div className="flex md:w-[32vw] flex-col items-start space-y-[22px] shrink-0">
                <div className="flex self-stretch gap-4 w-full">
                    <div className="flex items-center justify-center p-4 rounded-full shadow-[0px_0.4000000059604645px_1px_0px_rgba(102,109,128,0.20)] w-full  ">
                        <input type="email" name="email" placeholder="name@example.com" className=" text-[16px] leading-normal w-full" />
                    </div>
                    <button className="md:w-[12vw] flex items-center justify-center bg-main rounded-full overflow-hidden cursor-pointer">
                        <span className="text-center justify-center text-white text-base font-medium leading-tight">Join Now!</span>
                    </button>
                </div>
                <div className="flex items-center gap-[21px] self-stretch">
                    <div className="flex items-center gap-3">
                        <Image src={'/icons/check.png'} width={24} height={24} alt="check icon" />
                        <p className="text-[14px] font-medium leading-6 -tracking-[.18px]">Become the change you envision</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src={'/icons/check.png'} width={24} height={24} alt="check icon" />
                        <p className="text-[14px] font-medium leading-6 -tracking-[.18px]">No credit card required</p>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default JoinWaitlistScreen