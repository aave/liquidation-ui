import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .LegalBanner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 25;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    padding: 11px;
    @include respond-to(md) {
      padding: 20px;
    }
    @include respond-to(sm) {
      padding: 20px 10px;
      top: 50px;
    }

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      max-width: 1000px;
      margin: 0 auto;
      @include respond-to(md) {
        max-width: 850px;
      }
    }

    &__description-inner {
      width: 55%;
      @include respond-to(md) {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
      }
      @include respond-to(sm) {
        margin-bottom: 35px;
      }
      p {
        font-size: $small;
        @include respond-to(sm) {
          font-size: $medium;
        }
      }
    }

    &__buttons-inner {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include respond-to(md) {
        width: 100%;
        max-width: 600px;
        justify-content: center;
        margin: 0 auto;
      }
      @include respond-to(sm) {
        .DefaultButton {
          width: 100px;
          padding: 0 5px;
          .DefaultButton__wrapper {
            span {
              font-size: $small;
            }
          }
        }
      }

      .ButtonLink {
        margin-right: 20px;
      }
    }

    &__buttons-links {
      flex: 1;
      display: flex;
      justify-content: space-between;
      @include respond-to(md) {
        flex: 0;
      }
    }
  }

  .LegalBannerInside {
    top: auto;
    bottom: 50px;
    padding: 11px 11px 11px 70px;
    @include respond-to(md) {
      padding: 20px 20px 20px 70px;
    }
    @include respond-to(sm) {
      padding: 20px 10px;
      bottom: 65px;
      box-shadow: none;
    }
    .LegalBanner__description-inner {
      @include respond-to(xs) {
        margin-bottom: 10px;
      }
    }

    .LegalBanner__buttons-inner {
      @include respond-to(xs) {
        flex-direction: column;
        .ButtonLink {
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .LegalBanner__buttons-links {
      @include respond-to(xs) {
        margin-bottom: 10px;
      }
    }
  }

  .LegalBannerDark {
    box-shadow: none;
  }
`;

export default staticStyles;
