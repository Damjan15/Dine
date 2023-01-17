import { ReservationForm } from ".."

const ReservationSection = () => {
  return (
    <section className="max-w-7xl mx-auto h-[100vh] py-8 flex flex-col items-center justify-center xl:items-end xl:h-[50vh]">
        <ReservationForm />
    </section>
  )
}

export default ReservationSection