import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .ErrorPage {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
    overflow: hidden;
    text-align: center;
    position: relative;

    &__content {
      position: relative;
      z-index: 2;
      align-items: center;
      justify-content: center;
    }

    &__image-inner {
      margin-bottom: 55px;
      img {
        width: 187px;
        height: 97px;
        margin-left: -135px;
        @include respond-to(sm) {
          width: 130px;
          height: 136px;
          margin-left: 0;
        }
      }
    }

    &__title {
      text-align: center;
      margin-bottom: 5px;
      font-weight: 600;
      font-size: 30px;
      @include respond-to(sm) {
        font-size: 22px;
      }
    }
    &__titleBig {
      font-size: 70px;
      @include respond-to(sm) {
        font-size: 30px;
      }
    }

    &__description {
      font-size: $regular;
      margin: 0 auto 50px;
      max-width: 450px;
    }

    &__buttons-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__bottomBg {
      position: absolute;
      left: -10%;
      right: -10%;
      width: 120%;
      bottom: -45%;
      @include respond-to(md) {
        bottom: -35%;
      }
      @include respond-to(sm) {
        bottom: -20%;
      }
    }
  }

  .ErrorPageDark {
    background-image: none;
  }
`;

export default staticStyles;
