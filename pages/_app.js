import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps, ...appProps }) {

  // exclude admin pages from layout
  if ([`/admin`, `/admin/dashboard`].includes(appProps.router.pathname))
    return <Component {...pageProps} />;

  
  return (
    <Layout subNavProps={pageProps.categories}>
      <Component {...pageProps} />
    </Layout>
  );
}
