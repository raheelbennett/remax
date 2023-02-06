import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout subNavProps={pageProps.categories}>
      <Component {...pageProps} />
      {console.log(pageProps)}
    </Layout>
  );
}
