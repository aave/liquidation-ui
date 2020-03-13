import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';

  .NoDataGraph {
    height: 160px;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    p {
      font-size: $medium;
    }
  }
`;

export default staticStyles;
