import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="ru">
    <Head>
      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/apple-touch-icon.png" rel="apple-touch-icon" />

      <link href="/site.webmanifest" rel="manifest" />
    </Head>
    <body>
      <Main />

      <NextScript />
    </body>
  </Html>
)

export default Document
