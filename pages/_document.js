import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark" >
      <Head />
      <body className="container mx-auto dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
