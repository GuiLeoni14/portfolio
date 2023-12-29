import type { Metadata } from 'next'
// eslint-disable-next-line
import { Inter, La_Belle_Aurore } from 'next/font/google'
import './globals.css'
import { Header } from '@/layout/Header'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const belle = La_Belle_Aurore({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-belle',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Desenvolvedor de sites',
    default: 'Desenvolvedor de sites',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${belle.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
