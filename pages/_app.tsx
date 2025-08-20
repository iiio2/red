import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Geist, Geist_Mono } from 'next/font/google'
import { ProgressProvider } from '@bprogress/next/pages'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid`}
    >
      <ProgressProvider
        height='4px'
        color='#0A2FFF'
        options={{ showSpinner: true }}
        shallowRouting
      ></ProgressProvider>
      <Component {...pageProps} />
    </div>
  )
}
