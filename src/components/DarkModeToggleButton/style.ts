import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .DarkModeToggleButton {
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @include respond-to(sm) {
      justify-content: center;
      margin: 0 0 50px 0;
    }

    &__title {
      font-size: $medium;
      font-weight: 300;
      margin-right: 3px;
      @include respond-to(sm) {
        font-size: $extraLarge;
      }
    }

    &__switcher {
      .CustomSwitch__swiper {
        @include respond-to(sm) {
          bottom: 1px;
        }
      }
      .CustomSwitch__label {
        font-weight: 300;
        @include respond-to(sm) {
          font-size: $extraLarge;
        }
      }
    }
  }
`;

export default staticStyles;
