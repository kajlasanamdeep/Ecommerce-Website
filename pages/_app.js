import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <Head>
    {/* material ui icons */}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />

    {/* Google fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Aboreto&family=Amatic+SC:wght@700&family=Caveat&family=Cookie&family=Great+Vibes&family=Indie+Flower&family=Nanum+Pen+Script&family=Roboto+Mono:ital@1&display=swap" rel="stylesheet"></link>


  </Head>
  return <Component {...pageProps} />
}

export default MyApp
