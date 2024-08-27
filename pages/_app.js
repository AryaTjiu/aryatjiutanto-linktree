import { HoverProvider } from '@/context/HoverContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <HoverProvider>
      <Component {...pageProps} />
    </HoverProvider>
  )
}
