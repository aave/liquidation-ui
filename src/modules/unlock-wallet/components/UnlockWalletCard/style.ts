import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .UnlockWalletCard {
    margin: 20px;
    position: relative;
    @include respond-to(sm) {
      margin: 0 auto 20px;
    }
    &:hover {
      &:after {
        filter: blur(15px);
      }
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 3px;
      filter: blur(4px);
      transition: all 0.3s ease;
    }
    &:disabled {
      cursor: default;
      &:after {
        display: none;
      }
    }

    &__inner {
      width: 200px;
      height: 250px;
      display: flex;
      flex-direction: column;
      text-align: center;
      border-radius: 5px;
      position: relative;
      z-index: 2;
      padding: 40px 10px;
      @include respond-to(sm) {
        width: 320px;
        flex-direction: row;
        align-items: center;
        text-align: left;
        height: auto;
        padding: 15px 25px;
        @include respond-to(sm) {
          margin: 0 auto;
        }
      }
    }

    &__image {
      margin-bottom: 30px;
      @include respond-to(sm) {
        margin: 0 20px 0 0;
      }
      img {
        height: 50px;
      }
    }

    &__text-inner {
      h3 {
        font-size: $large;
        margin-bottom: 5px;
        font-weight: 600;
        transition: all 0.3 ease;
        letter-spacing: 0.2px;
        @include respond-to(sm) {
          margin-bottom: 5px;
        }
      }
      p {
        font-size: $medium;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.2px;
      }
    }

    &__warning {
      display: none;
      @include respond-to(sm) {
        display: flex;
      }
    }
  }
`;

// @ts-ignore
export default staticStyles;
