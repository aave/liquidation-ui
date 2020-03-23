import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .LiquidationConfirmation__inner {
    padding: 10px;
    display: flex;
    flex: 1;
  }

  .LiquidationConfirmation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      display: flex;
      align-items: center;
      span {
        margin-right: 6px;
      }
    }
  }
`;

export default staticStyles;
