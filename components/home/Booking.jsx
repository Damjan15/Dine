import { useRouter } from "next/router"

const Booking = () => {
  const router = useRouter();

  return (
    <section className="booking-bg">
      <div className="h-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-4 px-4 xl:flex-row xl:justify-between">
        <h2 className="text-[32px] leading-[40px] -tracking-[0.4px] font-bold text-white md:text-[48px] md:leading-[48px] md:-tracking-[0.5px]">Ready to make a reservation?</h2>

        <button className="btn-dark btn-sm" onClick={() => router.push('/reservations')}>Book a table</button>
      </div>
    </section>
  )
}

export default Booking