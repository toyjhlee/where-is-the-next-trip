import { WeatherData, cityByCountry } from '../../../data'

import { MonthSelector } from '../../../../app/components/SharedComponent'

type PageParams = {
  month: string
}

// 동남아 8월 여행지 건기
export default function Page({ params }: { params: PageParams }) {
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
              {showList.length === 0 && (
                <li className="text-sm text-gray-500">건기인 도시 없음</li>
              )}
            </ul>
          </article>
        )
      })}

      <article className="mt-10">
        <header className="text-lg font-semibold">다른 월 선택</header>
        <MonthSelector selectMonth={currentMonth} />
      </article>
    </>
  )
}

// 하지만, app/ 디렉토리 내에서 getStaticProps나 getStaticPaths와 같은 데이터 페칭 함수를 직접 사용하는 것은 지원되지 않습니다.
export function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({
    month: (i + 1).toString(),
  }))
}
