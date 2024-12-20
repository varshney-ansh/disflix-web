import localFont from 'next/font/local';
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const disflixFont = localFont({
  src: [
    {
      path: './fonts/Amazon\ Ember\ Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Amazon Ember Thin.woff',
      weight: '250',
      style: 'normal',
    },
    {
      path: './fonts/Amazon Ember.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Amazon Ember Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Amazon Ember Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Amazon Ember Heavy.woff',
      weight: '800',
      style: 'normal',
    },
  ],

})

export const metadata = {
  title: "Disflix.in Sign up for Disflix",
  metadataBase: new URL('https://disflix.in/'),
  description: "Enjoy Kung Fu Panda, Your Name, The Family Star and other Disflix Originals, popular movies, and hit TV shows — all available with your Disflix Membership",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Watch Movies For Free On Disflix" />
        <meta property="og:site_name" content="Disflix, Inc" />
        <meta property="og:url" content="https://disflix.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="Watch Movies For Free On Disflix" />
        <meta name="twitter:image:alt" content="disflix.in" />
        <meta name="google-site-verification" content="XeKIWyUM0hM_A4A8oIzjO5-_naVm6bcxiDN9SVTR0Ps" />
        <script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/png" sizes="any" />
      </head>
      <body className={disflixFont.className}>{children}</body>
      <GoogleAnalytics gaId="G-3EFQZGMMQ2" />
    </html>      
  );
}
