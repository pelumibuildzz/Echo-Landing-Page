import Image from "next/image"

const FaqDropdown = ({ question, answer, isDown, onToggle }) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex justify-between items-center rounded-[10px] bg-[rgba(255,255,255,.9)] shadow-[0px_0px_0px_4px_rgba(255,255,255,1.00)] border-[1px] border-border hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-main focus:ring-opacity-50"
      >
        <span className="font-medium text-[18px] leading-[29px] -tracking-[.26px] text-left">
          {question}
        </span>
        <div className={`px-[7px] py-[9px] transition-transform duration-200 ${isDown ? 'rotate-180' : ''}`}>
          <Image 
            src="/icons/chev-down.png" 
            alt="Chevron" 
            width={10} 
            height={6}
          />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isDown ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-8 py-6 border-t-2 border-border bg-[rgba(255,255,255,.5)] text-[16px] leading-[26px] text-gray-700">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default FaqDropdown