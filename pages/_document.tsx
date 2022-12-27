import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const devMode = process.env.ENVIRONMENT === 'dev'
  return (
    <Html lang='en'>
      <Head />
      <body className={`${devMode && 'debug-screens'}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
