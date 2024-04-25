import localFont from 'next/font/local';
import "./globals.css";

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
  title: "Disflix India - Watch Movies Online, Watch Anime Online, Watch TV Shows Online",
  description: "Watch Disflix movies & TV shows online or stream right to your PC, Mac, mobile, tablet and laptop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/png" sizes="any" />
      </head>
      <body className={disflixFont.className}>{children}</body>
    </html>

      
  );
}
