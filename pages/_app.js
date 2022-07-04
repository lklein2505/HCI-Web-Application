import '../styles/globals.css';
import Head from 'next/dist/shared/lib/head';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthContextProvider } from '../stores/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
        <Head>
          <title>NK Vagon</title>
          <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
