import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';

  .CustomSwitch {
    &__wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__label {
      font-size: $medium;
      margin-right: 10px;
    }

    .CustomSwitch__swiperDisabled {
      opacity: 1 !important;
    }
  }
`;

export default staticStyles;
