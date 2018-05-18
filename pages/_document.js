import Document, { Head, Main, NextScript } from "next/document"
import flush from "styled-jsx/server"
import Manifest from "next-manifest/manifest"
import ServiceWorker from "next-workbox/service-worker"

export default class extends Document {
  static getInitialProps({ renderPage }) {
    return {
      ...renderPage(),
      styles: flush()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>jmes</title>
          <Manifest themeColor="#000000" />
          <ServiceWorker
            src={"/static/workbox/sw.js"}
            scope={"../../"}
            unregister={process.env.NODE_ENV !== "production"}
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
