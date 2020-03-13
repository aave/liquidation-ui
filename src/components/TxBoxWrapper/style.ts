import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .TxBoxWrapper {
    width: 450px;
    border-width: 1px;
    border-style: solid;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    @include respond-to(xs) {
      width: 100%;
    }

    &__top-line {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    &__title {
      flex-grow: 1;
      font-size: $regular;
      font-weight: 600;
    }

    &__status-inner {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-left: 10px;
    }
    &__status {
      text-transform: capitalize;
      font-size: small;
    }
    &__status-dot {
      width: 13px;
      height: 13px;
      border-radius: 50%;
      margin-left: 7px;
      border-width: 1px;
      border-style: solid;
    }

    &__description-inner {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      @include respond-to(sm) {
        justify-content: flex-end;
        margin-bottom: 5px;
      }
    }
    &__noDescriptionInner {
      justify-content: flex-end;
    }
    &__description {
      width: 65%;
      font-size: $small;
      @include respond-to(sm) {
        width: 100%;
      }
    }

    .TxBoxWrapper__link {
      display: flex;
      align-items: center;
      justify-content: center;
      @include respond-to(sm) {
        margin-top: 5px;
      }
      span {
        font-size: $small;
        transition: all 0.3s ease;
        margin-left: 5px;
      }
    }
  }
`;

export default staticStyles;
