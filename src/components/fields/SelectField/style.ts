import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/screen-size';
  @import 'src/_mixins/vars';

  .SelectField {
    cursor: pointer;
  }
  .SelectField__control {
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
    border: none;
    cursor: pointer;
  }
  .SelectField__single-value {
    font-size: $medium;
  }
  .SelectField__indicator-separator {
    display: none;
  }
  .SelectField__indicator {
    svg {
      width: 25px;
      height: 25px;
    }
  }

  .SelectField__menu {
    margin: 0;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
    top: 90%;
  }
  .SelectField__menu-list {
    padding: 0;
  }
  .SelectField__option {
    font-size: $medium;
    outline: none !important;
    text-align: left;
    cursor: pointer;
    &:last-child {
      border-radius: 0 0 4px 4px;
    }

    &--is-selected {
      cursor: not-allowed;
    }
  }
`;

export default staticStyles;
