import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="transition ease-in duration-300 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 font-light">
          <div className="p-1 bg-gradient-to-l from-blue-600"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;