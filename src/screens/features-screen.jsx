import FeatureCard from "@/components/feature-card"
const features = [
    {
        imgUrl: '/features/wave.png',
        title: 'Waves',
        description: 'Post ideas or solutions that could improve your community — every Wave you make brings change closer.',
        iconUrl: '/icons/waves.svg'
    },
    {
        imgUrl: '/features/ping.png',
        title: 'Pings',
        description: 'Highlight real issues that need attention — from small inconveniences to major challenges.',
        iconUrl: '/icons/ping.svg'
    },
    {
        imgUrl: '/features/surge.png',
        title: 'Surge',
        description: 'Upvote the Waves and Pings that matter most, helping leaders see what truly deserves action.',
        iconUrl: '/icons/surge.svg'
    }
]

const FeaturesScreen = () => {
  return (
    <section id="Features" className="w-screen min-h-fit md:px-[184px] py-[119px]">
        <main className="flex flex-col space-y-2.5 items-center self-stretch p-2.5">
            <div className="flex flex-col md:px-[42px] items-center space-y-3 self-stretch">
                <h3 className="text-center font-medium text-main text-[12px]">Element of Change</h3>
                <h1 className="text-center font-medium text-[32px] md:text-[58.25px] leading-[40px] md:leading-[76.8px] text-nowrap">Our product has</h1>
                <div className="flex space-x-3 items-center text-[32px] md:text-[58.25px] ">
                    <h1 className="text-center font-medium leading-[40px] md:leading-[76.8px] text-nowrap">these big</h1>
                    <h1 className="text-white px-5 py-1 bg-main rounded-full shrink-0 text-center">features</h1>
                </div>
            </div>
            <div className="flex items-center gap-20 md:mt-20 lg:gap-8 flex-col lg:flex-row">
                {features.map((feature, index) => (
                    <FeatureCard 
                        key={index}
                        imgUrl={feature.imgUrl}
                        title={feature.title}
                        description={feature.description}
                        iconUrl={feature.iconUrl}
                    />
                ))}
            </div>
        </main>
    </section>
  )
}

export default FeaturesScreen