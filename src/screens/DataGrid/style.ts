import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .DataGrid {
    padding: 5px 5%;
    position: relative;
    @include respond-to(lg) {
      padding: 5px 8px;
    }

    &__item {
      margin-bottom: 12px;
      border-radius: 5px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
      transition-property: box-shadow, border;
      transition-duration: 0.2s;
      transition-timing-function: ease;
      border-width: 1px !important;
      border-style: solid !important;
      border-color: transparent !important;
    }
    &__item-button {
      width: 100%;
      text-align: left;
      padding: 12px 50px 12px 10px;
      font-size: $medium;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      p {
        word-break: break-all;
        flex: 1;
        padding: 0 10px;
        &:first-child {
          flex: 2;
        }
        @include respond-to(sm) {
          width: 100%;
          margin-bottom: 5px;
          flex: auto;
          &:last-child {
            margin-bottom: 0;
          }
        }
        span {
          display: block;
          font-weight: 600;
        }
        a {
          span {
            font-weight: 400;
          }
        }
      }
    }

    &__content {
      padding: 20px 0;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @include respond-to(md) {
        font-size: $medium;
        flex-direction: column-reverse;
      }
    }
    &__table-inner {
      flex: 1;
      margin-right: 40px;
      @include respond-to(md) {
        margin-right: 0;
      }
    }
    &__form-inner {
      width: 340px;
      @include respond-to(md) {
        margin: 0 auto 40px;
      }
    }

    &__itemActive {
      cursor: default;
    }

    &__navigation-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0;
      @include respond-to(sm) {
        flex-direction: column;
      }
    }
    &__search-inner {
      @include respond-to(sm) {
        margin-bottom: 20px;
      }
    }
    &__pagination-inner {
      display: flex;
      align-items: center;
    }
    &__pagination-button {
      font-size: 0;
      line-height: 0;
      position: relative;
      border-style: solid;
      border-width: 0 2px 2px 0;
      padding: 3px;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 2;
      display: inline-block;
      &:disabled {
        cursor: default;
      }
      &:after {
        content: '';
        border: 1px solid;
        position: absolute;
        top: -6px;
        left: -6px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
    &__pagination-buttonPrev {
      transform: rotate(135deg);
      margin-right: 30px;
      &:active {
        transform: rotate(135deg) scale(0.9);
      }
    }
    &__pagination-buttonNext {
      transform: rotate(-45deg);
      &:active {
        transform: rotate(-45deg) scale(0.9);
      }
    }
    &__page-counter {
      margin-left: 25px;
    }
    &__pageGoTo {
      margin-left: 30px;
      span {
        margin-right: 5px;
      }
      input {
        border-radius: 4px;
        padding: 3px 5px;
        font-size: $medium;
      }
    }
  }
`;

export default staticStyles;
