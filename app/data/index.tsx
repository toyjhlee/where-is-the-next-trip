import ID from './ID.json'
import KH from './KH.json'
import LA from './LA.json'
import MM from './MM.json'
import MY from './MY.json'
import PH from './PH.json'
import VN from './VN.json'
import TH from './TH.json'

export function cityByCountry(): CountryDate[] {
  return [KH, VN, PH, ID, MY, LA, MM, TH]
}

type CountryDate = {
  country: {
    countryName: {
      en: string
      ko: string
    }
    countryCode: string
  }
  cityList: CityData[]
}

type SpotData = {
  spotName: {
    en: string
    ko: string
  }
  spotDesc: string
  spotImg: string
}

type CityData = {
  cityName: {
    en: string
    ko: string
  }
  cityDesc: string
  combinedCode?: string // ISO 3166-2 코드로 표현, 도시별로 특정한 ISO 3166-2 코드가 존재하지 않을 도시의 이름을 _ 로 붙힘
  // 주요 관광지 추가하자
  dryMonths: number[]
  rainyMonths: number[]
  touristSpot: SpotData[]
}

export type { CountryDate, CityData, SpotData }
