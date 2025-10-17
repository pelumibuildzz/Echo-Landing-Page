import FaqAcordion from "@/components/faq-acordion"
import Image from "next/image"


const Faqs = [
    {
        question: "What is Echo?",
        answer: "Echo is an innovative platform designed to help you connect and communicate more effectively. Our tool provides seamless integration with your existing workflow to enhance productivity and collaboration.",
    },
    {
        question: "How does Echo work?",
        answer: "Echo uses advanced technology to streamline your communication processes. Simply sign up, connect your accounts, and start experiencing improved workflow management and team collaboration.",
    },
    {
        question: "Is Echo free to use?",
        answer: "We offer both free and premium plans. The free plan includes basic features, while premium plans unlock advanced functionality and priority support. Check our pricing page for detailed information.",
    },
]

const FaqScreen = () => {
  return (
    <section className='flex flex-col items-center py-16 md:py-[150px] px-6 md:px-[112px] bg-white'>
        <main className='w-full max-w-4xl flex flex-col items-center gap-12 md:gap-[57px]'>
            <div className='flex flex-col items-center gap-[15px]'>
                <h3 className='text-center font-medium text-main text-[12px] uppercase tracking-wider'>
                    Echo FAQ&apos;s
                </h3>
                <div className='flex flex-col items-center text-center text-3xl md:text-[43px] font-medium leading-tight md:leading-[58px] -tracking-[1.25px]'>
                    <h1>Frequently Asked</h1>
                    <h1>Questions</h1>
                </div>
            </div>

            <div className='w-full relative'>
                <FaqAcordion faqs={Faqs}/>
                {/* Echo Monochrome Bg */}
                <div className="absolute flex items-center justify-center -top-1/5 right-1/4 z-0 ">
                    <Image src={'/Echo Mono Bg.png'} alt="Echo background" width={444} height={444}/>
                </div>
            </div>

        </main>
    </section>
  )
}

export default FaqScreen