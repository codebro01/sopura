
"use client"; 
import Head from "next/head";
import { CssBaseline, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { Geist, Geist_Mono, Kanit, Outfit } from "next/font/google";
import ThemeRegistry from "../../themeRegistry";
import {NavbarComponent} from '../components/NavbarComponent'
import "./globals.css";
import 'animate.css';



const kanit = Kanit({
  variable: "--font-kanit", 
  subsets: ["latin"],
  weight: ['400', '700', '900']
})
const outfit = Outfit({
  variable: "--font-outfit", 
  subsets: ["latin"],
  weight: ['300', '500', '700']
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${outfit.variable} antialiased`}>
          <ThemeRegistry>
          <NavbarComponent/>  
            {children}
          </ThemeRegistry>
      </body>
    </html>
  );
}
