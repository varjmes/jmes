import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Manifest from 'next-manifest/manifest'
import ServiceWorker from 'next-workbox/service-worker'

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      styleTags
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>jmes</title>
          {this.props.styleTags}
          <Manifest themeColor="#000000" />
          <ServiceWorker
            src={'/static/workbox/sw.js'}
            scope={'../../'}
            unregister={process.env.NODE_ENV !== 'production'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
