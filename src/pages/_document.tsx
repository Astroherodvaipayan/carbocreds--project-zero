import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-no-repeat bg-cover bg-center bg-fixed bg-[url(/Users/shashankkarna/Desktop/5ire-land-main/src/assets/Screenshot 2023-06-21 at 9.52.09 PM.png)] style={{ backgroundColor: 'transparent' }} ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
