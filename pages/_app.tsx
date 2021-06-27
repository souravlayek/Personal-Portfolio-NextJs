import { AppProps } from 'next/app'
import '../styles/globals.scss'
import { ToastProvider } from 'react-toast-notifications'

function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  )
}

export default App
