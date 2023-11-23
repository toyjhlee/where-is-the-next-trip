import Link from 'next/link'

export default function Home() {
  return (
    <article>
      <h2 className="text-lg font-semibold">월별 건기인 동남아 도시</h2>
      <MonthSelector />
    </article>
  )
}

const MonthSelector = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n: number) => {
    return (
      <Link
        key={n}
        href={`/southeast-asia/dry-season/${n}`}
        className="mr-2"
      >{`${n}월`}</Link>
    )
  })
}
