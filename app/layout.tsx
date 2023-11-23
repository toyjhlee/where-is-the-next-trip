import './globals.css'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '여행지 가이드',
  description: '월별로 해외 여행지를 추천해 드립니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-[var(--background-start-rgb)] to-[var(--background-end-rgb)]">
          <Link href="/">
            <header id="nav">
              <h1 className="text-[var(--font-size-large)]">여행지 가이드</h1>
            </header>
          </Link>

          <main className="container mx-auto flex-grow px-2 py-4">
            <div className="mx-auto max-w-screen-md">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
