import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import {AuthProvider} from "../Context/AuthContext";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
