import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .LiquidationForm {
    margin-top: 15px;
    padding-top: 15px;

    .DefaultButton {
      margin-top: 20px;
    }
  }
`;

export default staticStyles;
