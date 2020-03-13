import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .TextBackButton {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px auto 0;
    text-align: center;
    &:active {
      transform: scale(0.98);
    }
    &__text {
      font-size: $small;
      transition: all 0.3s ease;
      @include respond-to(sm) {
        font-size: $regular;
      }
    }
  }
`;

export default staticStyles;
