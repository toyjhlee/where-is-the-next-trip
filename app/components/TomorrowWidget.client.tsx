'use client'

import React, { useEffect } from 'react'

const TomorrowWidget = ({ locationId }: { locationId: string }) => {
  useEffect(() => {
    const scriptId = 'tomorrow-sdk'
    if (document.getElementById(scriptId)) {
      // 필요한 경우 스크립트 재초기화 처리
      return
    }
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js'
    script.onload = () => {
      // 위젯 초기화 또는 로드된 스크립트 처리
    }
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className="tomorrow relative py-[20px]"
      data-location-id={locationId}
      data-language="KO"
      data-unit-system="METRIC"
      data-skin="light"
      data-widget-type="upcoming"
    >
      <a
        href="https://www.tomorrow.io/weather-api/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      >
        <img
          alt="Powered by the Tomorrow.io Weather API"
          src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
          width="100"
          height="18"
        />
      </a>
    </div>
  )
}

export default TomorrowWidget
