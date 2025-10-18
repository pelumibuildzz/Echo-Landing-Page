import Image from "next/image"

const HowItWorksSteps = ({index, imgUrl, heading, description}) => {
  return (
    <div key={index} className="flex flex-col items-center text-center md:w-[20vw] max-w-full">
      <div className="md:max-w-[20vw] relative overflow-hidden rounded-2xl">
        <Image className="" width={200} height={200} src={imgUrl}  alt={heading}/>
      </div>
      <h3 className="mt-[25px] mb-[9] font-medium text-[16px] md:text-[20px] leading-[150%] -tracking-[0.4px] w-max">{heading}</h3>
      <p className="text-dark-gray leading-[150%] -tracking-[0.36px] text-[14px] md:text-[18px] font-medium px-5">{description}</p>
    </div>
  )
}

export default HowItWorksSteps