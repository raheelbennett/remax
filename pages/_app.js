import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps, ...appProps }) {



  
  return (
    <ThemeProvider attribute="class">
    <Layout subNavProps={pageProps.categories}>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}
