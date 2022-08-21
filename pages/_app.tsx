import React from "react"
import { AppProps } from "next/app"
import { AppBar, CssBaseline, ThemeProvider } from "@mui/material"
import { UserProvider } from '@auth0/nextjs-auth0';
import theme from "@theme/index";


const MyApp = ({ Component: View, pageProps, router }: AppProps) => {
  return (<>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <UserProvider>
        <AppBar position="relative">
          Some App Bar
        </AppBar>
        <View {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  </>
  )
}

export default MyApp
