import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .BasicField {
    position: relative;
    z-index: 2;
    width: 100%;
    input {
      border: none;
      background: transparent;
      font-family: $roboto-font;
      padding: 10px;
      transition: all 0.3s ease;
      font-size: $medium;
      width: 100%;
      @include respond-to(sm) {
        font-size: $regular;
      }
    }
  }
`;

export default staticStyles;
