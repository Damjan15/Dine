import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { useRouter } from "next/router"

const Hero = () => {
  const router = useRouter();

  return (
    <header className="hero flex flex-col justify-center xl:justify-start">
      <div className="max-w-7xl mx-auto xl:ml-[180px] xl:h-full">

        <div className="flex flex-col items-center space-y-14 mt-12 lg:mt-52 xl:items-start xl:h-full xl:justify-center xl:mt-0">
          <Image src={logo} alt="dine-logo" className="xl:mb-36" />

          <div className="flex flex-col text-center space-y-5 max-w-[372px] px-3 md:max-w-[689px] md:px-24 xl:text-left xl:px-0 xl:max-w-[508px]">
            <h1 className="text-white font-light text-5xl leading-[64px] mb-3 xl:text-[80px] xl:leading-[80px]">
              Exquisite dining since 1989
            </h1>
            <p className="text-base leading-[26px] font-normal text-white md:text-xl md:leading-[30px]">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>

            
            <button className="btn-dark btn-sm mx-auto lg:mx-0" onClick={() => router.push('/reservations')}>Book a table</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
