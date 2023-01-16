import { highlights } from "@/utils/constants"
import { Divider, Highlight } from ".."

const Highlights = () => {
  return (
    <section className="bg-codGray py-16 xl:py-28">
      <div className="max-w-7xl mx-auto xl:flex">
      <div className="flex flex-col items-center justify-center text-center space-y-7 px-4 mb-12 md:max-w-[445px] md:mx-auto xl:text-left xl:items-start xl:max-w-[500px]">
        <Divider />
        <h2 className="text-[32px] leading-[40px] font-bold text-white -tracking-[0.4px] md:text-5xl md:leading-[48px]">A few highlights from our menu</h2>
        <p className="text-base leading-[26px] text-white md:text-xl md:leading-[30px]">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center px-4 space-y-6">
        { highlights.map((highlight) => <Highlight key={highlight.id} coverSm={highlight.mobileThumbnail} coverLg={highlight.largeThumbnail} title={highlight.title} description={highlight.description} isLast={highlight.isLast} />)}
      </div>
      </div>
    </section>
  )
}

export default Highlights