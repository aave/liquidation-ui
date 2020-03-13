import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';

  .AmountField {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 335px;
    margin-bottom: 5px;
    &:hover {
      .AmountField__wrapper {
        &:before {
          filter: blur(2px);
        }
      }
    }

    &__wrapper {
      width: 100%;
      height: 50px;
      padding: 1px;
      border-radius: 3px;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 3px;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 3px;
        transition: all 0.15s ease;
      }
    }

    &__inner {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 12px;
      border-radius: 3px;
      transition: all 0.15s ease;

      .TokenIcon {
        img {
          margin-right: 0 !important;
        }
      }
    }

    &__input {
      input {
        font-size: $regular;
      }
    }

    &__currency {
      font-weight: 600;
    }

    &__error {
      margin-top: 2px;
      text-align: right;
      font-size: $medium;
      font-weight: 600;
      width: 100%;
    }

    &__right-inner {
      position: relative;
    }
    &__maxButton {
      font-size: $medium;
      font-weight: 600;
      &:active {
        transform: scale(0.9);
      }
    }
  }

  .AmountField__focus {
    .AmountField__wrapper {
      &:before {
        filter: blur(2px);
      }
    }
  }
`;

export default staticStyles;
