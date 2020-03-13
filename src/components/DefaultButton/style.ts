import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .DefaultButton {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 160px;
    padding: 0 25px;
    height: 40px;
    border-radius: 25px;
    border: 1px solid;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    &:after {
      content: '';
      border-radius: 25px;
      filter: blur(5px);
      transition: all 0.3s ease;
      background: inherit;
      position: absolute;
      z-index: 1;
      opacity: 0;
      height: 100%;
      width: 100%;
      bottom: 0;
      left: 0;
    }
    &:hover {
      &:after {
        opacity: 1;
      }
    }
    &:active {
      transform: scale(0.99);
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    &:disabled {
      cursor: not-allowed;
      transition: none;
      &:after {
        display: none;
      }
      &:active {
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
        transform: scale(1);
      }
    }

    &__wrapper {
      display: flex;
      flex-direction: row;
      position: relative;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    span {
      line-height: 1;
      margin: 0;
      padding: 0;
      font-size: 12px;
      transition: all 0.3s ease;
    }

    &__big {
      width: 200px;
      height: 40px;
      span {
        font-size: $medium;
      }
    }

    &__small {
      width: 120px;
      height: 30px;
      span {
        font-size: $extraSmall;
      }
    }

    &__gradient {
      border: transparent;
    }

    &__transparent {
      background: transparent !important;
      &:after {
        transition: none;
      }
      span {
        transition: none;
      }
    }
  }

  .DefaultButton__dark {
    box-shadow: none;
  }

  .DefaultButton.DefaultButton__mobileBig {
    @include respond-to(sm) {
      width: 300px;
      height: 50px;
      span {
        font-size: 15px;
      }
    }
  }

  /* loader */
  .loader {
    position: absolute;
    left: -10px;
    width: 20px;
    height: 20px;
  }

  .loader:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .circular-loader {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
  }

  .loader-path {
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default staticStyles;
