import { WeatherData, cityByCountry } from '../../../data'

type PageParams = {
  month: string
}

// 동남아 8월 여행지 건기
export default function page({ params }: { params: PageParams }) {
  const listArr = cityByCountry()

  const currentMonth = Number(params.month)
  return (
    <>
      <h1 className="text-xl font-semibold">{`${currentMonth}월에 건기인 동남아 도시`}</h1>

      {listArr.map((list: WeatherData[]) => {
        const countryNameKo = list[0].countryName.ko
        const showList = list.filter(
          (obj) => !obj.rainyMonths.includes(currentMonth),
        )

        return (
          <article key={countryNameKo} className="mt-2">
            <h2 className="text-lg font-semibold">{countryNameKo}</h2>
            <ul>
              {showList.map((obj: WeatherData) => {
                return (
                  <li className="mr-2 inline-block" key={obj.cityIATACode}>
                    {obj.cityName.ko} <small>{`(${obj.cityIATACode})`}</small>
                  </li>
                )
              })}
              {showList.length === 0 && <li>추천 여행지 없음</li>}
            </ul>
          </article>
        )
      })}
    </>
  )
}
