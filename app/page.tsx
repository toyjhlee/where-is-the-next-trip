'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

// https://stackoverflow.com/questions/74421327/nextrouter-was-not-mounted-next-js

export default function Home() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
  }

  return (
    <form onSubmit={onSubmit}>
      <MonthSelector />
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}

const MonthSelector = () => {
  const router = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = event.target.value
    router.push(`/${selectedMonth}`)
  }

  return (
    <select onChange={handleChange}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n: number) => (
        <option value={n} key={n}>{`${n}월`}</option>
      ))}
    </select>
  )
}
