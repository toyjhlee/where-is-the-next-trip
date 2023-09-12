import list, { WeatherData } from '../data'

type PageParams = {
  month: string
}

export default function page({ params }: { params: PageParams }) {
  const arr = filterCitiesByDryMonth(list(), Number(params.month))

  return (
    <main>
      <h1>{`${params.month}월 추천 여행지`}</h1>

      <ul>
        {arr.map((obj: WeatherData) => (
          <li key={obj.cityIATACode}>
            {obj.countryName.ko} {obj.cityName.ko}
          </li>
        ))}
      </ul>
    </main>
  )
}

const filterCitiesByDryMonth = (
  list: WeatherData[],
  month: number,
): WeatherData[] => {
  if (month < 1 || month > 12) {
    return []
  }

  return list.filter((obj) => !obj.rainyMonths.includes(month))
}
