import HowItWorksSteps from "@/components/how-it-works-step"
const Steps = [ 
    {
        imgUrl: "/steps/create.png",
        heading: "Create your Echo account",
        description: "Join the platform and set up your profile in seconds."

    },
    {
        imgUrl: "/steps/convo.png",
        heading: "Start the conversation",
        description: "Share ideas through Pings, propose initiatives with Waves, or rally your community with Surges."
    },
    {
        imgUrl: "/steps/impact.png",
        heading: "Gain traction and make impact",
        description: "Watch your ideas grow as people engage, support, and drive real change together."
    }
]

const HowItWorksScreen = () => {
  return (
    <section className="bg-light w-screen py-[30px] md:px-[215px] flex flex-col space-y-[42px] items-center justify-center self-stretch">
        <div className="flex flex-col items-center space-y-[15px]">
            <div>
                <h3 className="text-center font-medium text-main text-[12px]">How it works?</h3>
                <h1 className="md:text-[40px] font-bold leading-[60%] -tracking-[1.2px] mt-[21px]">A Few Easy Steps to Start Making Change</h1>
            </div>
            <h5 className="md:w-[49vw] text-dark-gray text-center text-[20px] leading-[150%] -tracking-[0.4px]">In just a few simple steps, you’re ready to use the instrument of change. Make a difference, amplify your voice, and let your impact be heard.</h5>
        </div>

        <div className="flex items-start space-x-[66px]">
            {Steps.map((step, index) => (
                HowItWorksSteps({
                    key: index,
                    index: index + 1,
                    imgUrl: step.imgUrl,
                    heading: step.heading,
                    description: step.description
                })
            ))}
        </div>
    </section>
  )
}

export default HowItWorksScreen