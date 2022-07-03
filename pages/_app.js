import '../styles/globals.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthContextProvider } from '../stores/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
