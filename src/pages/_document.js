import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />

          {/* Vendor Styles */}
          <link rel='stylesheet' href='/vendor/boxicons/css/boxicons.min.css'></link>
          <link rel='stylesheet' href='/vendor/swiper/swiper-bundle-min.css'></link>
          {/* Main Theme Styles + Bootstrap */}
          <link rel='stylesheet' href='/css/theme.min.css'></link>
          {/* custom css */}
          <link rel='stylesheet' href='/css/custom.css'></link>

      <body>
        <Main />
        <NextScript />


          {/* Vendor Scripts */}
          <script src='/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
          <script src='/vendor/smooth-scroll/smooth-scroll.polyfills.min.js'></script>
          <script src='/vendor/swiper/swiper-bundle-min.js'></script>
          <script src='/vendor/jarallax/jarallax-elemet-min.js'></script>
          <script src='/vendor/parallax/parallax.min.js'></script>

          {/* Main Theme Script */}
          <script src='/assets/js/theme.js'></script>

      </body>
    </Html>
  )
}
