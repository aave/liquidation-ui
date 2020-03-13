import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/screen-size';

  .SearchField {
    width: 300px;
    display: flex;
    align-items: center;
    position: relative;
    outline: none;
    @include respond-to(sm) {
      width: 230px;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      @include respond-to(sm) {
        height: 100%;
        width: calc(100% + 50px);
        border-radius: 25px;
        border-style: solid;
        border-width: 1px;
        background: transparent !important;
        left: -25px;
      }
    }

    img {
      position: relative;
      bottom: 1px;
    }
  }

  .SearchFieldFocused {
    &:after {
      height: 2px;
      @include respond-to(sm) {
        border-width: 2px;
        height: 100%;
      }
    }
  }
`;

export default staticStyles;
