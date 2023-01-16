import Image from "next/image"

const Highlight = ({ coverSm, coverLg, title, description, isLast }) => {
  return (
    <div className={`${isLast ? "border-0" : "border-b border-white/10"} flex flex-col md:flex-row md:items-center`}>
      <div className="flex flex-col items-center">
        <Image src={coverSm} className="block md:hidden" alt="highlight-cover-mobile" />
        <Image src={coverLg} className="hidden md:block" alt="highlight-cover-large-screens" />
      </div>

      <div className="px-8 py-8 md:text-left md:max-w-[450px]">
        <h3 className="text-xl leading-[24px] text-white font-bold mb-3">{ title }</h3>
        <p className="text-white">{ description }</p>
      </div>
    </div>
  )
}

export default Highlight