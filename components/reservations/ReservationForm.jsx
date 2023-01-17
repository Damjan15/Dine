import DateInput from "./inputs/DateInput";
import EmailInput from "./inputs/EmailInput";
import NameInput from "./inputs/NameInput";
import PeopleInput from "./inputs/PeopleInput";

const ReservationForm = () => {
  return (
    <form className="w-[327px] h-[585px] shadow-xl flex flex-col space-y-12 px-8 py-8 bg-white -mt-56 md:w-[540px] md:h-[545px] md:-mt-[700px]">
      {/* Name Input */}
      <NameInput />

      {/* Email Input */}
      <EmailInput />

      {/* Date Input */}
      <DateInput />

      {/* People Input */}
      <PeopleInput />

      <button className="btn-secondary">Make Reservation</button>
    </form>
  );
};

export default ReservationForm;
