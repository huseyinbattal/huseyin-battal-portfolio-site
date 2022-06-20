import "@/styles/index.css"
import Layout from "@/layouts/index"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
