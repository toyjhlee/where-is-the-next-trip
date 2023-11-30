import { cityByCountry, CountryDate, CityData, SpotData } from '../../../data'

import { MonthSelector } from '../../../../app/components/SharedComponent'
import React from 'react'

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

      <ul className="space-y-4">
        {listArr.map(({ country, cityList }: CountryDate) => {
          const countryNameKo = country.countryName.ko
          const showList = cityList.filter(
            (obj) => !obj.rainyMonths.includes(currentMonth),
          )

          return (
            <React.Fragment key={countryNameKo}>
              {/* <h2 className="text-lg font-semibold">{countryNameKo}</h2> */}

              {showList.map((obj: CityData) => {
                return (
                  <li key={`${obj.combinedCode}`}>
                    <h2 className="mb-2 text-lg font-semibold text-gray-800">
                      <span className="mr-2">{obj.cityName.ko}</span>
                      <span className="font-normal text-gray-500">
                        {countryNameKo}
                      </span>
                    </h2>
                    <p className="mb-2 text-gray-700">{obj.cityDesc}</p>
                    {/* <p className="font-medium text-gray-800">
                      건기인 월: 11월 - 4월
                    </p> */}

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {obj.touristSpot.map((spot: SpotData) => {
                        return (
                          <div
                            className="rounded-lg border border-gray-200 shadow-lg"
                            key={spot.spotName.en}
                          >
                            {spot.spotImg != '' && spot.spotImg[0] && (
                              <img
                                className="h-40 w-full rounded-t-lg object-cover"
                                src={spot.spotImg[0]}
                                alt="관광지 이미지"
                              />
                            )}

                            <div className="p-4">
                              <h4 className="mb-2 text-lg font-medium text-gray-800">
                                {spot.spotName.ko}
                              </h4>
                              <p className="text-gray-600">{spot.spotDesc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </li>
                )
              })}
              {showList.length === 0 && (
                <li>
                  <h2 className="mb-2 text-lg font-semibold text-gray-800">
                    {countryNameKo}
                  </h2>
                  <p className="font-semibold text-red-600">건기인 도시 없음</p>
                </li>
              )}
            </React.Fragment>
          )
        })}
      </ul>

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
