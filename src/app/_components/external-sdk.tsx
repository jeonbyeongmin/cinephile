/* eslint-disable @next/next/no-before-interactive-script-outside-document */

'use client';

import { logOnDev } from '@/utils';
import Script from 'next/script';

export function ExternalSDK() {
  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
        integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
        crossOrigin="anonymous"
        strategy="lazyOnload"
        onLoad={() => {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
          logOnDev('카카오 SDK 초기화 여부:', window.Kakao.isInitialized());
        }}
      />
    </>
  );
}
