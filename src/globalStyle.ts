import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/screen-size';
  @import 'src/_mixins/vars';
  @import 'src/_mixins/font-face';

  @include font-face('roboto-font', '/fonts/RobotoRegular/RobotoRegular');
  @include font-face('roboto-font', '/fonts/RobotoLight/RobotoLight', 300);
  @include font-face('roboto-font', '/fonts/RobotoMedium/RobotoMedium', 500);
  @include font-face('roboto-font', '/fonts/RobotoBold/RobotoBold', 600);

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    &:after,
    &:before {
      box-sizing: border-box;
    }
  }

  html {
    -webkit-text-size-adjust: none;
    position: relative;
    height: 100%;
  }

  body {
    font-family: $roboto-font;
    font-size: $regular;
    min-width: 360px;
  }

  input,
  textarea,
  select,
  input:disabled,
  textarea:disabled,
  select:disabled,
  input[type='search'],
  input[type='date'],
  input[type='date']:disabled {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
    opacity: 1;
    font-family: $roboto-font;
    &::placeholder {
      font-family: $roboto-font;
    }
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input[type='text']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  input[type='text']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  a:focus,
  a:active,
  button::-moz-focus-inner,
  input[type='reset']::-moz-focus-inner,
  input[type='button']::-moz-focus-inner,
  input[type='submit']::-moz-focus-inner,
  select::-moz-focus-inner,
  input[type='file'] > input[type='button']::-moz-focus-inner {
    border: 0;
    outline: 0;
  }

  a {
    transition: all 0.3s ease;
    outline: none;
    text-decoration: none;
    display: inline-block;
    position: relative;
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      outline: none;
    }
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.98);
    }
    @include respond-to(sm) {
      transition: none;
    }
  }

  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: $roboto-font;
  }

  .ButtonLink {
    &:active,
    &:hover {
      opacity: 1;
      transform: scale(1);
    }
  }

  html,
  body,
  #root,
  .Main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  ul {
    list-style: none;
    li {
      list-style: none;
    }
  }

  #drift-widget {
    right: auto !important;
    left: -8px !important;
    bottom: 0 !important;
  }

  @media only screen and (max-width: 767px) {
    #drift-widget {
      right: 5px !important;
      left: auto !important;
      bottom: 45px !important;
    }
    #drift-widget.drift-widget-sidebar-half-height {
      bottom: 0 !important;
    }
  }

  body > img:last-of-type {
    display: none;
  }
`;

export default staticStyles;
