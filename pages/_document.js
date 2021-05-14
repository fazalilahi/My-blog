import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300 border-t-4 border-blue-600 transition duration-200 ease-in text-justify">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;