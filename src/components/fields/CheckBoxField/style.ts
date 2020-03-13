import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';

  .CheckBoxField {
    position: relative;

    input[type='checkbox'] {
      width: auto;
      display: none;
      opacity: 1 !important;
    }

    label {
      cursor: pointer;
      font-size: $medium;
      position: relative;
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      margin: 0 0 0 10px;
    }

    input:disabled + label {
      cursor: default !important;
      opacity: 1 !important;
    }

    &__label {
      margin: auto;
      user-select: none;
      cursor: pointer;
    }

    span {
      display: inline-block;
      vertical-align: middle;
      transform: translate3d(0, 0, 0);
      &:first-child {
        width: 18px;
        height: 18px;
        transform: scale(1);
        transition: all 0.2s ease;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          position: absolute;
          width: 14px;
          height: 11px;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 16px;
          stroke-dashoffset: 16px;
          transition: all 0.3s ease;
          transition-delay: 0.1s;
          transform: translate3d(0, 0, 0);
        }
      }

      &:last-child {
        padding-left: 8px;
      }
    }

    input:checked + .CheckBoxField__label span:first-child svg {
      stroke-dashoffset: 0;
    }
  }
`;

export default staticStyles;
