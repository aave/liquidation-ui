import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .DataGrid {
    padding: 35px 15%;
    position: relative;
    @include respond-to(lg) {
      padding: 35px 8px;
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
      padding: 15px 50px 15px 20px;
      font-size: $regular;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      @include respond-to(md) {
        font-size: $medium;
        padding: 12px 50px 12px 20px;
      }
      p {
        flex: 2;
        &:last-child {
          flex: 1;
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
      }
    }
    &__arrows {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      right: 20px;
      top: 17px;
      border-width: 1px;
      border-style: solid;
      transition: all 0.3s ease;
      @include respond-to(md) {
        top: 12px;
      }
      &:after,
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%);
        height: 2px;
        width: 10px;
        border-radius: 2px;
        transition: all 0.3s ease;
      }
      &:after {
        transform: translate(-50%) rotate(90deg);
      }
    }

    &__content {
      transition: height 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0 20px;
      position: relative;
      @include respond-to(md) {
        font-size: $medium;
      }

      .DataGrid__line {
        margin-bottom: 15px;
        h3 {
          font-size: $large;
          margin-bottom: 3px;
        }
        p {
          span {
            font-weight: 600;
          }
        }
      }
    }

    &__itemActive {
      padding-bottom: 15px;
      .DataGrid__item-button {
        margin-bottom: 10px;
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 100%;
          z-index: 1;
        }
      }

      .DataGrid__arrows {
        &:after {
          transform: translate(-50%);
        }
      }

      .DataGrid__content {
        padding-bottom: 10px;
      }
    }
  }
`;

export default staticStyles;
