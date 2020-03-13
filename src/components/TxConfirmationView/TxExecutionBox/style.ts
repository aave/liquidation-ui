import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .TxExecutionBox {
    width: 100%;

    &__buttons-inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @include respond-to(sm) {
        align-items: flex-end;
        margin-top: 10px;
      }
    }
  }
`;

export default staticStyles;
