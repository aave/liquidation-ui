import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/screen-size';

  .ReactModal__Overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.7) !important;
    position: relative;
    z-index: 99;
  }

  .ReactModal__Content {
    position: relative !important;
    top: auto !important;
    bottom: auto !important;
    right: auto !important;
    left: auto !important;
    border: none !important;
    max-width: 500px !important;
    border-radius: 5px !important;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    padding: 30px 50px !important;
    margin: 5px !important;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @include respond-to(sm) {
      padding: 30px 20px 40px !important;
    }
  }

  .BasicModal__close {
    border: 0;
    background: transparent;
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 0;
    line-height: 0;
    margin: 0;
  }

  .BasicModal__close:hover {
    opacity: 0.7;
  }

  .BasicModal__close:active {
    transform: scale(0.8);
  }

  @media only screen and (max-height: 400px) {
    .ReactModal__Content.ReactModal__Content--after-open {
      position: absolute !important;
      top: 5% !important;
      bottom: 5% !important;
      display: block;
      overflow: auto !important;
    }
  }
`;

export default staticStyles;
