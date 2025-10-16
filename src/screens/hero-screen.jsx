import EchoAnimation from "@/components/echo-animation";
import Navbar from "@/components/navbar";
import Image from "next/image";

const HeroScreen = () => {
  return (
    <section className="w-screen md:px-28 md:pt-8 flex flex-col space-y-[77px] items-center hero-bg">
      <Navbar />
      <main className="flex flex-col space-y-5 py-[5px] px-[3px] items-center justify-center">
        <h3 className="text-center font-medium text-main text-[12px]">Make Waves. Be heard.</h3>
        <div className="flex flex-col items-center gap-y-2.5 leading-[76.8px]">
          <h1 className="text-center font-medium text-[58.25px]">A System,Tool & Voice</h1>
          <div className="flex space-x-3 items-center max-h-[84px]">
            <h1 className="text-center font-medium text-[58.25px]">that Listens</h1>
            <EchoAnimation/>
          </div>
        </div>
        <div className="flex flex-col items-center text-sub-text text-center text-[16px] font-normal ">
          <h4 className="leading-8">Let&apos;s build the future together, We don&apos;t just need a</h4>
          <h4>Voice - We Need a System That Listens</h4>
        </div>
        <div className="flex justify-center items-start self-stretch space-x-2.5">
          <div className="p-4 flex items-start rounded-full email-cta">
            <input type="email" name="email" placeholder="name@email.com"
             className="mr-auto md:w-[23vw]"
            />
          </div>
          <button className="md:px-[27px] md:py-[15px] bg-mid cursor-pointer rounded-[20px]">Join the Waitlist!</button>
        </div>
      </main>
      {/* Big Image */}
      <Image src={'/Test Image.png'} width={1216} height={865} alt="Leak of Echo" />
    </section>
  );
};

export default HeroScreen;
