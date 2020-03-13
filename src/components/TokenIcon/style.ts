import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .TokenIcon {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 10px;
      @include respond-to(sm) {
        margin-right: 7px;
      }
    }

    &__symbol {
      font-weight: 600;
    }

    &__name,
    &__dollar {
      font-size: $large;
      @include respond-to(sm) {
        font-size: $medium;
      }
    }

    &__name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @include respond-to(xs) {
        max-width: 90px;
      }
      b {
        font-weight: 400;
      }
    }

    &__color-dot {
      height: 6px;
      width: 6px;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      right: -8px;
    }
  }

  .TokenIconWithFullName {
    max-width: 100%;
    position: relative;
  }
`;

export default staticStyles;
