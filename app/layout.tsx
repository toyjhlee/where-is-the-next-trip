import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '월별 해외 여행지 추천',
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
          <header className="w-full bg-blue-600 py-6 text-center text-white">
            <h1 className="text-[var(--font-size-large)]">
              월별 해외 여행지 추천
            </h1>
          </header>
          <main className="container mx-auto flex-grow px-4">
            <div className="mx-auto my-10 max-w-screen-md">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
