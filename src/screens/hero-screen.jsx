import EchoAnimation from "@/components/echo-animation";
import Navbar from "@/components/navbar";

const HeroScreen = () => {
  return (
    <section className="w-screen md:px-28 md:pt-8 flex flex-col space-y-[77px] items-center">
      <Navbar />
      <main className="flex flex-col space-y-5 py-[5px] px-[3px] items-center justify-center">
        <h3 className="text-center font-medium text-main text-[12px]">Make Waves. Be heard.</h3>
        <div className="flex flex-col items-center gap-y-2.5">
          <h1 className="text-center font-medium text-[58.25px]">A System,Tool & Voice</h1>
          <div className="flex space-x-3 items-center">
            <h1 className="text-center font-medium text-[58.25px]">that Listens</h1>
            <EchoAnimation/>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroScreen;
