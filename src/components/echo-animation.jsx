

const EchoAnimation = () => {
  return (
    <div className="md:w-[230px] md:h-[104px] shrink-0 relative flex items-center justify-center w-[30vw]">
        <div className="w-full h-full bg-anim-bg shrink-0 rounded-[50px] anim-back py-1.5 px-[9px] z-0 absolute">
            <div className="w-full h-full rounded-[50px] bg-anim-mid anim-mid py-[9px] px-[11px]">
                <div className="w-full h-full rounded-[50px] anim-inner">
                </div>
            </div>
        </div>
        <span className="text-white text-[32px] md:text-[50px] text-center font-medium  z-10 top-0 right-0">Echo</span>
    </div>
  )
}

export default EchoAnimation