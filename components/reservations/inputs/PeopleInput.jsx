import Image from "next/image";
import plus from "../../../public/images/icons/icon-plus.svg";
import minus from "../../../public/images/icons/icon-minus.svg";

const PeopleInput = () => {
  return (
    <div className="w-[263px] h-[41px] flex items-center justify-between border-b border-[#8E8E8E] md:w-full">
        <button>
            <Image src={plus} alt="plus-icon" />
        </button>

        <span className="text-xl leading-6 font-bold text-[#151515]">4 people</span>

        <button>
            <Image src={minus} alt="minus-icon" />
        </button>
    </div>
  )
}

export default PeopleInput