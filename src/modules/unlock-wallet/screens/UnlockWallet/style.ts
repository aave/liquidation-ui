import css from 'styled-jsx/css';

import bottomBg from './images/bottomBg.svg';
import bottomBgDark from './images/bottomBgDark.svg';
import mobileBottomBg from './images/mobileBottomBg.svg';
import mobileBottomBgDark from './images/mobileBottomBgDark.svg';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .UnlockWallet {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 30px 20px 110px;
    position: relative;
    background-image: url(${bottomBg});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100.5%;
    @include respond-to(sm) {
      background-image: url(${mobileBottomBg});
      background-size: 100.5%;
      display: block;
    }
    @include respond-to(xs) {
      padding-bottom: 80px;
    }

    &__caption-inner {
      margin: 0 auto 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 600px;
      p {
        font-size: $large;
        font-weight: 300;
        @include respond-to(sm) {
          font-size: $regular;
        }
      }
    }
    &__caption {
      font-size: 45px;
      font-weight: 600;
      margin-bottom: 25px;
      @include respond-to(sm) {
        font-size: 32px;
        margin-bottom: 20px;
      }
    }

    &__content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      @include respond-to(sm) {
        flex-direction: column;
      }
    }

    &__warning {
      margin: 0 auto;
      @include respond-to(sm) {
        display: none;
      }
    }

    &__privacy-inner {
      font-size: $medium;
      margin: 30px auto 0;
      text-align: center;
      max-width: 600px;
      @include respond-to(sm) {
        margin: 20px auto 0;
        font-size: 13px;
      }
      a {
        font-weight: 600;
      }
      a,
      p {
        letter-spacing: 0.2px;
      }
      p {
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
        span {
          font-weight: 600;
        }
      }
    }
  }

  .UnlockWalletDark {
    background-image: url(${bottomBgDark});
    background-size: 100.5%;
    @include respond-to(sm) {
      background-image: url(${mobileBottomBgDark});
      background-size: 100.5%;
    }
  }

  @media (max-height: 500px) and (max-width: 1000px) {
    .UnlockWallet {
      display: block;
    }
  }
`;

export default staticStyles;
