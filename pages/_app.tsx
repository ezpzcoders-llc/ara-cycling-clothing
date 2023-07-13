import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/lib/redux/store'
import '@/styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>ArA Cycling Clothing</title>
                <meta name="description" content="Allie B Creations" />
            </Head>
            <ReduxProvider store={store}>
                <Component {...pageProps} />
            </ReduxProvider>
        </>
    )
}

export default App
