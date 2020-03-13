import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .TxConfirmationView {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;

    &__content-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &__content {
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      padding: 15px;
      width: 450px;
      margin: 0 auto;
      position: relative;
      @include respond-to(xs) {
        width: 100%;
      }
    }

    &__actions-inner {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    &__title {
      text-align: left;
      width: 450px;
      margin: 0 auto 5px;
      @include respond-to(xs) {
        width: 100%;
      }
    }

    &__button-inner {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-top: 15px;
      justify-content: flex-end;
      @include respond-to(sm) {
        margin-top: 10px;
      }
    }

    .TxConfirmationView__back-button {
      margin: 0 auto;
    }
  }

  @media (max-height: 650px) and (max-width: 1025px) {
    .TxConfirmationView {
      display: block;

      .TxConfirmationView__content-inner {
        display: block;
      }
      .TxConfirmationView__actions-inner {
        display: block;
      }
    }
  }
`;

export default staticStyles;
