import Image from "next/image";
import logo from "../../public/images/logo.svg";

const ReservationsHero = () => {
  return ( 
    <section className="reservations-hero">
      <div className="max-w-7xl mx-auto xl:ml-[180px] xl:h-full">
        <div className="flex flex-col items-center space-y-14 pt-8 xl:items-start xl:h-full xl:justify-center xl:mt-0">
          <Image src={logo} alt="dine-logo" className="md:mr-auto md:ml-12 xl:mb-36" />

          <div className="flex flex-col text-center space-y-5 max-w-[372px] px-3 md:max-w-[689px] md:px-24 xl:text-left xl:px-0 xl:max-w-[508px]">
            <h1 className="text-white font-light text-5xl leading-[64px] mb-3 xl:text-[80px] xl:leading-[80px]">
              Reservations
            </h1>
            <p className="text-base leading-[26px] font-normal text-white md:text-xl md:leading-[30px]">
            We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
            </p>

            <button className="btn-dark btn-sm mx-auto md:hidden">
              Reserve Place
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationsHero;
