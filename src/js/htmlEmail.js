export function html({ url, text, user }) {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="background-color: #eaeaea; margin-top: 0; padding: 0; margin: 0;">
      <head>
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="format-detection" content="telephone=no">
        <style type="text/css">
          @media (max-width: 499px) {
            u + .body .inbox-fix,
            u + .body .content-shell-table,
            u + .body .footer-shell-table,
            u + .body .footer {
              min-width: calc(100vw - 8.5vw) !important;
            }
            .mobile-hide,
            .ios-hide {
              display: none !important;
            }
            .desktop-hide,
            .desktop-hide img {
              display: initial !important;
            }
            table.desktop-hide {
              display: table !important;
            }
            .mobile-100w {
              width: 100% !important;
            }
            .mobile-block {
              display: block !important;
            }
            .mobile-center {
              margin: 0 auto;
              text-align: center !important;
            }
            .inner-padding {
              padding-left: 6% !important;
              padding-right: 6% !important;
            }
            .outside-padding {
              padding-left: 12% !important;
              padding-right: 12% !important;
            }
            .content-padding {
              padding-left: 6% !important;
              padding-right: 6% !important;
            }
            .desktop-hide-max,
            .desktop-hide-max img {
              display: initial !important;
            }
          }
          @media screen and (-webkit-min-device-pixel-ratio: 0) and (max-width: 499px) {
            .container.main-border {
              padding: 0 !important;
            }
            .content-shell {
              border: none !important;
            }
          }
          @media yahoo {
            table {
              border-collapse: collapse;
              table-layout: fixed;
            }
            table table {
              table-layout: auto;
            }
          }
          .hide-link a,
          .iosnonlink a,
          .hide-link {
            text-decoration: none !important;
            cursor: text;
          }
          @media screen {
            @font-face {
              font-family: NetflixSans-Light;
              src: url("https://assets.nflxext.com/us/email/fonts/NetflixSans-Light-Opt.woff2");
              font-weight: 300;
            }
            @font-face {
              font-family: NetflixSans-Regular;
              src: url("https://assets.nflxext.com/us/email/fonts/NetflixSans-Regular-Opt.woff2");
              font-weight: 400;
            }
            @font-face {
              font-family: NetflixSans-Medium;
              src: url("https://assets.nflxext.com/us/email/fonts/NetflixSans-Medium-Opt.woff2");
              font-weight: 700;
            }
            @font-face {
              font-family: NetflixSans-Bold;
              src: url("https://assets.nflxext.com/us/email/fonts/NetflixSans-Bold-Opt.woff2");
              font-weight: 700;
            }
          }
          @media (max-width: 499px) {
            .mobile-hide-max,
            .ios-hide-max {
              display: none !important;
            }
            .inbox-fix {
              display: none;
            }
            .desktop-hide-max,
            .desktop-hide-max img {
              display: initial !important;
            }
            table.content-shell-table,
            table.footer-shell-table,
            .footer {
              width: 100% !important;
            }
            .content {
              width: 100% !important;
            }
          }
          .footer-shell .footer-link {
            line-height: 20px;
          }
          @media (max-width: 499px) {
            .image .default-image-width img {
              width: 100%;
            }
          }
          @media (max-width: 499px) {
            .bullet .indent.true {
              width: 8% !important;
            }
            .bullet .indent.true {
              padding-left: 3% !important;
            }
            .envelope.rtl .bullet .indent.true {
              padding-right: 3% !important;
            }
          }
          @media (max-width: 499px) {
            .bullet-point {
              line-height: 22px !important;
            }
          }
          @media (max-width: 499px) {
            .color-wrapper {
              width: 100% !important;
            }
          }
          @media (max-width: 499px) {
            .evidence-cards-component-image-cell {
              width: 12% !important;
            }
          }
          @media (max-width: 499px) {
            .evidence-images img {
              width: 100% !important;
              height: auto !important;
            }
          }
          @media (max-width: 499px) {
            .marker {
              padding: 5px 7px 5px 7px !important;
            }
          }
          @media (max-width: 499px) {
            .evidence-trailer-component-image-cell {
              width: 12% !important;
            }
          }
          @media (max-width: 500px) {
            .button-copy a {
              padding: 13px 0px !important;
              width: 100% !important;
            }
          }
          @media (min-width: 501px) {
            .button-copy a {
              padding: 13px 40px;
            }
          }
          @media only screen and (max-width: 500px) {
            .main-header-icon-cell {
              width: 12% !important;
            }
            .header-copy-cell {
              width: 85% !important;
            }
            .header-copy-cell-with-profile-icon {
              width: 78% !important;
            }
            .netflix-logo-cell {
              width: 10% !important;
            }
          }
          @media (max-width: 499px) {
            .image .default-image-width img {
              width: 100%;
            }
            .artwork img {
              width: 100% !important;
            }
            .number img {
              width: 100% !important;
            }
          }
          @media (max-width: 499px) {
            .episode-content-cell {
              width: 40% !important;
            }
            .episode-content-cell-image {
              width: 100% !important;
              height: auto !important;
            }
            .episode-content-cell-progress-bar {
              width: 100% !important;
              height: auto !important;
            }
          }
          @media (max-width: 499px) {
            .exp-img-1 img {
              width: 70% !important;
            }
            .exp-img-2 {
              padding-left: 20px !important;
            }
            .exp-img-2 img {
              width: 85% !important;
            }
            .exp-img-3 img {
              width: 85% !important;
            }
            .exp-img-4 img {
              width: 85% !important;
            }
            .calendar img {
              width: 85% !important;
              height: auto !important;
            }
          }
          @media (max-width: 499px) {
            .logo-with-horizontal-date-logo-image-cell {
              width: 60% !important;
            }
          }
          @media (max-width: 500px) {
            .mosaic-module .middle {
              width: 46% !important;
              padding-right: 4% !important;
              padding-left: 4% !important;
            }
            .mosaic-module .left,
            .mosaic-module .right {
              width: 24.8% !important;
            }
            .mosaic-module .component-image.cell,
            .mosaic-module .single-button .content-padding {
              padding-top: 15px !important;
            }
          }
          @media only screen and (max-width: 500px) {
            .module-kar-hero-inner-body-cell {
              width: 88% !important;
            }
          }
        </style>
      </head>
    <body
      class="body"
      style="background-color: #eaeaea; margin-top: 0; padding: 0; margin: 0"
    >
    
    <table width="100%" border="0" class="envelope default " cellpadding="0" cellspacing="0" style="background-color: #eaeaea;" bgcolor="#eaeaea">
      <tr>
        <td align="center" class="container" style="background-color: #eaeaea; margin-top: 0;" bgcolor="#eaeaea">
          <table align="center" border="0" class="content" cellpadding="0" cellspacing="0" style="background-color: #ffffff; width: 500px;" width="500" bgcolor="#ffffff">
            <tr>
              <td>
                <table class="tracking-pixel disabled-plaintext image" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
     
              <tr>
                <td align="center" class="shell">
                  <a
                    href="https://disflix.in/"
                    class="disabled-plaintext"
                    style="color: inherit"
                  >
                    <table
                      class="logo image"
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                    >
                      <tr>
                        <td
                          class="cell logo content-padding"
                          align="left"
                          style="
                            padding-left: 40px;
                            padding-right: 40px;
                            padding-top: 20px;
                            
                          "
                        >
                          <img 
                            src="https://disflix.in/brand/blackLogo.png"
                            alt="Disflix"
                            width="100"
                            border="0"
                            class="undefined"
                            style="
                              -ms-interpolation-mode: bicubic;
                              border: none;
                              outline: none;
                              border-collapse: collapse;
                              display: block;
                              border-style: none;
                              
                            "
                          />
                        </td>
                      </tr>
                    </table>
                  </a>
                  <table
                    align="left"
                    width="100%"
                    class="copy-table"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        align="left"
                        class="copy h1 content-padding"
                        style="
                          padding-left: 40px;
                          padding-right: 40px;
                          font-family: NetflixSans-Bold, Helvetica, Roboto,
                            Segoe UI, sans-serif;
                          font-weight: 700;
                          font-size: 36px;
                          line-height: 43px;
                          letter-spacing: -1px;
                          padding-top: 20px;
                          color: #02078b;
                        "
                      >
                        Confirm Your Account
                      </td>
                    </tr>
                  </table>
                  <table
                    align="left"
                    width="100%"
                    class="copy-table"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        align="left"
                        class="copy p content-padding"
                        style="
                          padding-left: 40px;
                          padding-right: 40px;
                          font-family: NetflixSans-Regular, Helvetica, Roboto,
                            Segoe UI, sans-serif;
                          font-weight: 400;
                          font-size: 16px;
                          line-height: 21px;
                          padding-top: 20px;
                          color: #221f1f;
                        "
                      >
                        Hi
                        <span class="break-word" style="color: #060de7; word-break: break-all"
                          >User Name</span
                        >,
                      </td>
                    </tr>
                  </table>
                  <table
                    align="left"
                    width="100%"
                    class="copy-table"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        align="left"
                        class="copy p content-padding"
                        style="
                          padding-left: 40px;
                          padding-right: 40px;
                          font-family: NetflixSans-Regular, Helvetica, Roboto,
                            Segoe UI, sans-serif;
                          font-weight: 400;
                          font-size: 16px;
                          line-height: 21px;
                          padding-top: 20px;
                          color: #221f1f;
                        "
                      >
                        Thank you for signing up with Disflix India. 
                      </td>
                    </tr>
                  </table>
                  <table
                    align="left"
                    width="100%"
                    class="copy-table"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        align="left"
                        class="copy p content-padding"
                        style="
                          padding-left: 40px;
                          padding-right: 40px;
                          font-family: NetflixSans-Regular, Helvetica, Roboto,
                            Segoe UI, sans-serif;
                          font-weight: 400;
                          font-size: 16px;
                          line-height: 21px;
                          padding-top: 20px;
                          color: #221f1f;
                        "
                      >
                      To complete your registration, please click on the button below to verify your account.
                      
                      </td>
                    </tr>
                  </table>
                  <table
                    class="single-button mobile-100w"
                    align="center"
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        class="content-padding"
                        align="center"
                        style="
                          padding-left: 40px;
                          padding-right: 40px;
                          padding-top: 20px;
                        "
                      >
                        <table
                          class="inner-button border-false"
                          style="
                            background-color: #02078b;
                            border-radius: 4px;
                            width: 100%;
                          "
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          bgcolor="#e50914"
                        >
                          <tr>
                            <td
                              class="h5 button-td"
                              align="center"
                              style="
                                font-family: NetflixSans-Bold, Helvetica, Roboto,
                                  Segoe UI, sans-serif;
                                font-weight: 700;
                                font-size: 14px;
                                line-height: 17px;
                                letter-spacing: -0.2px;
                                padding: 14px 40px;
                                color: #ffffff;
                              "
                            >
                              <a
                                class="h5"
                                href="https://www.netflix.com/"
                                style="
                                  font-family: NetflixSans-Bold, Helvetica, Roboto,
                                    Segoe UI, sans-serif;
                                  font-weight: 700;
                                  font-size: 14px;
                                  line-height: 17px;
                                  letter-spacing: -0.2px;
                                  text-align: center;
                                  text-decoration: none;
                                  display: block;
                                  color: #ffffff;
                                "
                                >Verify Now</a
                              >
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <table
                    align="left"
                    width="100%"
                    class="copy-table"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        align="left"
                        class="copy p content-padding"
                        style="
                        
                          padding-left: 40px;
                          padding-right: 40px;
                          font-family: NetflixSans-Regular, Helvetica, Roboto,
                            Segoe UI, sans-serif;
                          font-weight: 400;
                          font-size: 16px;
                          line-height: 21px;
                          padding-top: 20px;
                          color: #221f1f;
                        "
                      >
                        Unable to Verify? </br></br>
                        Visit our
                        <a
                          href="https://disflix.in/help/contact"
                          style="color: inherit; text-decoration: underline"
                          >Help Center</a
                        >
                        for more info or mail us @
                        <a
                          href="mailto:support@disflix.in"
                          style="color: inherit; text-decoration: underline"
                          >support@disflix.in</a
                        >.
                      </td>
                    </tr>
                  </table>
                  <table
                    align="left"
                    width="100%"
                    class="copy-table"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        align="left"
                        class="copy h5 medium content-padding"
                        style="
                          padding-left: 40px;
                          padding-right: 40px;
                          font-size: 14px;
                          line-height: 17px;
                          letter-spacing: -0.2px;
                          font-family: NetflixSans-Medium, Helvetica, Roboto,
                            Segoe UI, sans-serif;
                          font-weight: 700;
                          padding-top: 20px;
                          color: #221f1f;
                        "
                      >
                        Team Disflix India
                      </td>
                    </tr>
                  </table>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td
                        class="divider content-padding"
                        style="
                          padding-left: 40px;
                          padding-right: 40px;
                          padding-top: 30px;
                        "
                      >
                        <table
                          align="center"
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                        >
                          <tr>
                            <td
                              class="empty divider-border"
                              style="
                                font-size: 0;
                                line-height: 0;
                                border-style: solid;
                                border-bottom-width: 0;
                                border-color: #221f1f;
                                border-top-width: 2px;
                              "
                            >
                               
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  class="footer-shell"
                  style="background-color: #ffffff"
                  bgcolor="#ffffff"
                >
                  <table
                    class="footer"
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        align="center"
                        valign="top"
                        class="footer-shell content-padding"
                        style="
                          padding-left: 40px;
                          padding-right: 40px;
                          background-color: #ffffff;
                        "
                        bgcolor="#ffffff"
                      >
                        <table
                          width="100%"
                          class="spacer-table"
                          cellpadding="0"
                          cellspacing="0"
                        >
                          <tr>
                            <td
                              class="spacer"
                              style="font-size: 0; line-height: 0; height: 40px"
                              height="40"
                            >
                               
                            </td>
                          </tr>
                        </table>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td
                              valign="top"
                              class="footer-icon-wrapper"
                              style="padding: 0 20px 0 0"
                            >
                              <table
                                class="component-image image"
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                              >
                                <tr>
                                  <td
                                    class="cell component-image none"
                                    align="center"
                                    style="padding-top: 0"
                                  >
                                    <img
                                      src="https://disflix.in/favicon/android-chrome-512x512.png"
                                      alt
                                      width="35"
                                      border="0"
                                      class="undefined"
                                      style="
                                        -ms-interpolation-mode: bicubic;
                                        border: none;
                                        outline: none;
                                        border-collapse: collapse;
                                        display: block;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td valign="top" class="footer-copy-wrapper">
                              <table
                                class="footer-table"
                                width="100%"
                                valign="top"
                                cellpadding="0"
                                cellspacing="0"
                              >
                                <tr>
                                  <td class="footer-copy-shell">
                                   
                                   
                                      <table
                                      align="left"
                                      width="100%"
                                      class="copy-table"
                                      cellpadding="0"
                                      cellspacing="0"
                                    >
                                      <tr>
                                        <td
                                          align="left"
                                          class="copy p2 none"
                                          style="
                                            font-family: NetflixSans-Regular,
                                              Helvetica, Roboto, Segoe UI,
                                              sans-serif;
                                            font-weight: 400;
                                            font-size: 12px;
                                            line-height: 15px;
                                            letter-spacing: -0.12px;
                                            padding-top: 20px;
                                            color: #a9a6a6;
                                          "
                                        >
                                          <a
                                            class="footer-link"
                                            href="https://disflix.in/legal/privacy"
                                            style="
                                              text-decoration: underline;
                                              line-height: 20px;
                                              color: #a4a4a4;
                                            "
                                            >Privacy Policy - Global</a
                                          ><br /><a
                                            class="footer-link"
                                            href="https://disflix.in/legal/terms"
                                            style="
                                              text-decoration: underline;
                                              line-height: 20px;
                                              color: #a4a4a4;
                                            "
                                            >Terms of Use - Global</a
                                          ><br /><a
                                            class="footer-link"
                                            href="https://disflix.in/help/contact"
                                            style="
                                              text-decoration: underline;
                                              line-height: 20px;
                                              color: #a4a4a4;
                                            "
                                            >Help Center</a
                                          >
                                        </td>
                                      </tr>
                                    </table>
                                    
                                    <table
                                      width="100%"
                                      class="spacer-table"
                                      cellpadding="0"
                                      cellspacing="0"
                                    >
                                      <tr>
                                        <td
                                          class="spacer"
                                          style="
                                            font-size: 0;
                                            line-height: 0;
                                            height: 40px;
                                          "
                                          height="40"
                                        >
                                           
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
  
  <body>
    </html>
    `
}