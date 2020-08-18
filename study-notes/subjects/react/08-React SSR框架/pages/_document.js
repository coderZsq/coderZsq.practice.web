import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="zh">
        <Head />
        <body>
          <h2>哈哈哈</h2>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument