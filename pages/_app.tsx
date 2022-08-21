import React from "react"
import { AppProps } from "next/app"
import { AppBar, CssBaseline } from "@mui/material"
import { UserProvider } from '@auth0/nextjs-auth0';


const MyApp = ({ Component: View, pageProps }: AppProps) => {

  return (<>
    <CssBaseline />
    <UserProvider>
      <AppBar position="relative">
        Some App Bar
      </AppBar>
      <View {...pageProps} />
    </UserProvider>
  </>
  )
}

export default MyApp
