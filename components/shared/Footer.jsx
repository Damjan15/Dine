import { footerAddresses, footerOpenTimes } from "@/utils/constants";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-codGray h-[440px] xl:h-[240px]">
      <div className="h-full max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row md:justify-around xl:justify-between">
        <div className="mb-8">
          <Image src={logo} alt="dine-logo" />
        </div>

        <div className="flex flex-col space-y-8 xl:flex-row xl:space-y-0 xl:space-x-28">
          <ul className="text-center md:text-left">
            {footerAddresses.map((address) => (
              <li
                key={address.id}
                className="item"
              >
                {address.title}
              </li>
            ))}
          </ul>

          <ul className="text-center md:text-left">
            { footerOpenTimes.map((time) => <li key={time.id} className="item">{ time.title }</li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
