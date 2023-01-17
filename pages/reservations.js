import Head from "next/head";
import { ReservationSection, ReservationsHero } from "@/components";

export default function Reservations() {
  return (
    <>
      <Head>
        <title>Reservations | Dine 1989</title>
        <meta
          name="description"
          content="Experience the delicious tastes of Dine, the premier restaurant established in 1989. Discover our menu, location, and hours of operation on our website."
        />
        <meta
          name="keywords"
          content="restaurant, Dine, established, 1989, menu, location, hours, operation, delicious, tastes, premier"
        />
      </Head>

      <ReservationsHero />
      <ReservationSection />
    </>
  )
}
