import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';

  .NoDataPanel {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      font-size: $large;
      font-weight: 600;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 40px;
      max-width: 450px;
    }

    &__backButton-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  .NoDataPanel__fixedHeight {
    min-height: calc(100vh - 240px);
  }
`;

export default staticStyles;
