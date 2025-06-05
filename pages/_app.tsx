import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>株式会社Grayscale | 茨城県水戸市のDXコンサルティング</title>
        <meta name="description" content="株式会社Grayscaleは茨城県水戸市を拠点に、地域企業のDX推進をサポートします。システム開発、業務管理アプリの製作・販売を通じて、お客様の課題解決に貢献します。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
