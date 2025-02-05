import Head from "next/head";
import { Fragment } from "react";
import '../globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- !Google Fonts --> */}

        {/* <!-- Styles --> */}
        <link type="text/css" rel="stylesheet" href="css/plugins.css" />
        <link type="text/css" rel="stylesheet" href="css/style.css?ver=1.1" />
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/pe-icon-7-stroke/1.2.1/css/pe-icon-7-stroke.min.css"
          integrity="sha512-5eV4r1UlwGHlRfL52MPyAdR1aIDzHPhgb5ZBv++/PT6cHdDXi/7k6FZBrqkquS2IQ5KTO04qDktk1DdVDykkeg=="
          crossorigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
