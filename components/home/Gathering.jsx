import Image from "next/image";
import familyGatheringDesktop from "../../public/images/homepage/family-gathering-desktop.jpg";
import familyGatheringTablet from "../../public/images/homepage/family-gathering-tablet.jpg";
import familyGatheringMobile from "../../public/images/homepage/family-gathering-mobile.jpg";

const Gathering = () => {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto xl:flex">
        <div className="flex flex-col items-center">
          <Image src={familyGatheringMobile} className="block shadow-2xl md:hidden" />

          <Image src={familyGatheringTablet} className="hidden shadow-2xl relative md:block xl:hidden" />

          <Image src={familyGatheringDesktop} className="hidden shadow-2xl relative xl:block" />

        </div>

        <div className="flex flex-col items-center justify-center text-center mt-16 px-4 md:max-w-[457px] md:mx-auto xl:justify-start xl:items-start xl:text-left xl:space-y-12">
            <h2 className="text-[32px] leading-[40px] font-bold text-ebonyClay xl:text-[48px] xl:leading-[48px]">Family Gathering</h2>
            <p className="text-ebonyClay leading-[26px] my-4 xl:text-[20px] xl:leading-[30px]">We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>

            <button className="btn-secondary w-[245px] h-[64px] mt-6">Book a table</button>
        </div>
      </div>
    </section>
  );
};

export default Gathering;
