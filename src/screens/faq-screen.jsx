import FaqAcordion from "@/components/faq-acordion"
import Image from "next/image"


const Faqs = [
    {
        question: "How do we know Echo won’t just turn into another complaint app full of noise and negativity?",
        answer: "Echo isn’t about complaining. It’s built to help people share real issues and suggest practical solutions. Every post follows a clear structure, so leaders see organized insights instead of random opinions. The platform highlights patterns, trends, and what matters most to the community. It’s not about who talks the loudest — it’s about helping everyone see what’s really going on and what can be improved.",
    },
    {
        question: "Won’t Echo make people challenge leadership or speak out in the wrong way?",
        answer: "Not at all. Echo is designed to make communication easier, not confrontational. It gives leaders a simple way to listen, respond, and understand what their people are thinking. You still decide how and when to respond, and what to act on. Echo helps leaders stay connected, spot issues early, and build trust through transparency — without losing authority or order.",
    },
    {
        question: "I’ve seen many platforms that promise change but nothing really happens. What makes Echo different?",
        answer: "Echo is built around action, not talk. Every post, response, and idea contributes to a shared dashboard that shows real progress over time. It’s a space where people can see that their voices lead somewhere — where suggestions can become policies or improvements. Echo brings everyone into the process of change, one idea at a time.",
    },
]

const FaqScreen = () => {
  return (
    <section id="FAQ" className='flex flex-col items-center py-16 md:py-[150px] px-6 md:px-[112px] bg-white'>
        <main className='w-full max-w-4xl flex flex-col items-center gap-12 md:gap-[57px]'>
            <div className='flex flex-col items-center gap-[15px]'>
                <h3 className='text-center font-medium text-main text-[12px] uppercase tracking-wider'>
                    Echo FAQ&apos;s
                </h3>
                <div className='flex flex-col items-center text-center text-[28px] md:text-[43px] font-medium leading-tight md:leading-[58px] -tracking-[1.25px]'>
                    <h1>Frequently Asked</h1>
                    <h1>Questions</h1>
                </div>
            </div>

            <div className='w-full relative'>
                <FaqAcordion faqs={Faqs}/>
                {/* Echo Monochrome Bg */}
                <div className="absolute flex items-center justify-center top-0 md:-top-1/5 md:right-1/4 z-0 ">
                    <Image src={'/Echo Mono Bg.png'} alt="Echo background" width={444} height={444}/>
                </div>
            </div>

        </main>
    </section>
  )
}

export default FaqScreen