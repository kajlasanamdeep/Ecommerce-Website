import '../styles/globals.css'
import Footer from './comopnents/footer'
import Navbar from './comopnents/navbar'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}

export default MyApp
