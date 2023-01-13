import Image from "next/image";
import pattern from "../../public/images/patterns/pattern-curve-top-right.svg";
import enjoyableMobile from "../../public/images/homepage/enjoyable-place-mobile.jpg";
import enjoyableTablet from "../../public/images/homepage/enjoyable-place-tablet.jpg";
import enjoyableDesktop from "../../public/images/homepage/enjoyable-place-desktop.jpg";

import { Divider } from "..";


const Enjoy = () => {
  return (
    <section className="relative">
        <div className="max-w-7xl mx-auto">
            {/* Background Pattern */}
            <Image src={pattern} alt="background-pattern" className="absolute hidden md:block md:top-[180px] md:-left-[250px] xl:left-0 xl:top-[300px]" />

            <div className="py-24 flex flex-col items-center justify-center w-full -mt-[150px] xl:flex-row xl:justify-around">
              <Image src={enjoyableMobile} alt="enjoyable-mobile" className="block shadow-2xl md:hidden" />
              <Image src={enjoyableTablet} alt="enjoyable-mobile" className="hidden shadow-2xl md:block xl:hidden" />
              <Image src={enjoyableDesktop} className="hidden xl:block xl:shadow-2xl" />

              <div className="flex items-center justify-between flex-col mt-12 xl:mt-0 xl:items-start">
                <Divider />

                <div className="max-w-[300px] text-center md:max-w-[380px] xl:max-w-[500px] xl:text-left">
                  <h2 className="text-[32px] leading-[40px] tracking-[-0.4px] text-ebonyClay font-bold my-4 md:text-5xl md:leading-[48px] xl:my-8">Enjoyable place for all the family</h2>
                  <p className="text-ebonyClay text-base leading-[26px] md:text-xl md:leading-[30px]">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Enjoy