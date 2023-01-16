import Image from "next/image";
import locallySourcedDesktop from "../../public/images/homepage/locally-sourced-desktop.jpg";
import locallySourcedTablet from "../../public/images/homepage/locally-sourced-tablet.jpg";
import locallySourcedMobile from "../../public/images/homepage/locally-sourced-mobile.jpg";
import patternLines from "../../public/images/patterns/pattern-lines.svg";
import { Divider } from "..";

const LocallySourced = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 xl:flex xl:flex-row-reverse">
        <div className="flex flex-col items-center justify-center py-24 xl:py-0 xl:mb-[-120px]">
          <Image
            src={locallySourcedMobile}
            alt="locally-sourced-mobile"
            className="block shadow-2xl md:hidden"
          />
          <Image
            src={locallySourcedTablet}
            alt="locally-sourced-tablet"
            className="hidden shadow-2xl md:block md:relative xl:hidden"
          />
          <Image
            src={locallySourcedDesktop}
            alt="locally-sourced-desktop"
            className="hidden shadow-2xl xl:block"
          />

          <Image src={patternLines} className="hidden md:block md:absolute md:right-[35px] lg:right-[150px] xl:right-[40px] 2xl:hidden" alt="pattern-lines" />
        </div>

        <div className="flex flex-col items-center justify-center text-center px-4 space-y-6 md:max-w-[457px] md:mx-auto xl:items-start xl:text-left xl:max-w-[500px] xl:space-y-11">
          <Divider />
          <h3 className="text-ebonyClay font-bold text-[32px] leading-[40px] -tracking-[0.4px] md:text-[48px] md:leading-[48px]">The most locally sourced food</h3>
          <p className="text-ebonyClay text-base leading-[28px] md:text-[20px] md:leading-[30px]">All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
        </div>
      </div>
    </section>
  );
};

export default LocallySourced;
