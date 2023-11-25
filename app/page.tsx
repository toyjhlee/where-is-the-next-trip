import Link from 'next/link'
import { MonthSelector } from '../app/components/SharedComponent'

export default function Home() {
  return (
    <article>
      <h2 className="text-lg font-semibold">월별 건기인 동남아 도시</h2>
      <MonthSelector />
    </article>
  )
}
