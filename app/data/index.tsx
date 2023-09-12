import ID from './ID.json'
import KH from './KH.json'
import LA from './LA.json'
import MM from './MM.json'
import MY from './MY.json'
import PH from './PH.json'
import VN from './VN.json'
import TH from './TH.json'

export default function CombinedData(): WeatherData[] {
  const combinedData = [...KH, ...VN, ...PH, ...ID, ...MY, ...LA, ...MM, ...TH]

  return combinedData
}

type WeatherData = {
  countryName: {
    en: string
    ko: string
  }
  countryCode: string
  cityName: {
    en: string
    ko: string
  }
  cityIATACode: string
  dryMonths: number[]
  rainyMonths: number[]
}

type CombinedData = WeatherData[]

export type { WeatherData }
