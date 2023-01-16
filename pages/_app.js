import { Footer } from '@/components'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <Footer />
  </>
  )
}
