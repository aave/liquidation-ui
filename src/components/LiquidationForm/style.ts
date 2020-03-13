import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .LiquidationForm {
    &__top-inner {
      width: 335px;
    }

    &__line {
      margin-bottom: 15px;
      h3 {
        font-size: $large;
        margin-bottom: 3px;
      }
      p {
        display: flex;
        justify-content: space-between;
        width: 100%;
        span {
          font-weight: 600;
        }
      }
    }
    &__radioField {
      width: 100%;
      padding: 3px 0;
      border-radius: 3px;
      input {
        display: none;
      }
      p {
        cursor: pointer;
      }
    }
    &__radioFieldActive {
      p {
        cursor: default;
      }
    }

    &__bottom-inner {
      margin-top: 15px;
      padding-top: 15px;
    }

    .DefaultButton {
      margin-top: 20px;
    }
  }
`;

export default staticStyles;
