import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .BackButton {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    bottom: 2px;
    img {
      width: 18px;
      height: 18px;
      @include respond-to(sm) {
        width: 16px;
        height: 14px;
      }
    }

    p {
      margin-left: 10px;
      font-size: $medium;
      transition: all 0.2s ease;
      @include respond-to(sm) {
        display: none;
      }
    }
  }
`;

export default staticStyles;
