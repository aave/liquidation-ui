import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .WarningArea {
    padding: 12px 20px;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    @include respond-to(sm) {
      margin: auto;
      margin-bottom: 20px;
    }

    &__top-line {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      img {
        margin-top: 2px;
        position: absolute;
        left: 0;
      }
      p {
        padding-left: 25px;
        font-size: $medium;
        position: relative;
      }
    }

    &__content {
      font-size: $small;
    }
  }

  .WarningAreatMargin {
    margin-top: 20px;
  }
  .WarningAreaTopLine {
    margin-bottom: 10px;
    p {
      font-weight: 600;
    }
  }
`;

export default staticStyles;
