import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import PageTransition from 'components/pageTransition'
function MyApp({ Component, pageProps }) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  )
}

export default MyApp
