import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .LabeledSwitch {
    width: 300px;
    height: 40px;
    border-radius: 25px;
    padding: 1px;
    position: relative;
    @include respond-to(sm) {
      width: 280px;
    }

    &__pointer {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      transform: translateX(2px);
      transition: all 0.4s ease;
      padding: 4px 2px 2px;
      span {
        display: block;
        border-radius: 25px;
        width: 100%;
        height: 100%;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
      }
    }

    &__inner {
      border-radius: 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border-width: 1px;
      border-style: solid;
    }

    button {
      width: 50%;
      position: relative;
      z-index: 2;
      height: 38px;
      font-size: $medium;
      transition: all 0.4s ease;
    }
  }

  .LabeledSwitchActive {
    .LabeledSwitch__pointer {
      transform: translateX(148px);
      @include respond-to(sm) {
        transform: translateX(138px);
      }
    }
  }
`;

export default staticStyles;
