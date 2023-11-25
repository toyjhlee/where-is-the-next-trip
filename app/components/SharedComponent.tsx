import Link from 'next/link'

export const MonthSelector = ({ selectMonth }: { selectMonth?: number }) => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n: number) => {
    return (
      <Link
        key={n}
        href={`/southeast-asia/dry-season/${n}`}
        className={`mr-2 ${
          selectMonth === n ? 'font-semibold text-blue-700' : ''
        }`}
      >{`${n}월`}</Link>
    )
  })
}
