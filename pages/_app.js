// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { ProfileImageContextProvider } from "../context/ProfileImageContext";
import "../styles/globals.css";
import { UserProvider } from "../context/UserContext";
import { ThemeContextProvider } from "../context/ThemeContext"; // Import your renamed context provider
import { ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { useTheme } from "../context/ThemeContext"; // Provide the correct path

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const { selectedTheme } = useTheme(); // Get the theme mode from the context

  return (
    <SessionProvider session={session}>
      <UserProvider>
        <ProfileImageContextProvider>
          <ThemeContextProvider>
            <ThemeProvider theme={selectedTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </ThemeContextProvider>
        </ProfileImageContextProvider>
      </UserProvider>
    </SessionProvider>
  );
}
