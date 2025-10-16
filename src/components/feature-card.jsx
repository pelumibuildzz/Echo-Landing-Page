import Image from "next/image"

const FeatureCard = ({imgUrl, title, description, iconUrl }) => {
  return (
    <div className="flex flex-col items-start space-y-5 flex-[1_0_0] self-stretch">
      <Image src={imgUrl} width={334} height={256} alt={title} />
      <div className="flex items-center space-x-2">
        <Image src={iconUrl} width={32} height={32} alt={title} />
        <h3 className="text-[22px] font-normal">{title}</h3>
      </div>
      <p className="text-sm text-sub-text">{description}</p>
    </div>
  )
}

export default FeatureCard