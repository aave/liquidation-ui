import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .Row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    &__column {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    &__title-inner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &__content {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
    p {
      padding-right: 10px;
      font-size: $regular;
      @include respond-to(sm) {
        font-size: $medium;
      }
    }
    &__subtitle {
      font-size: $small;
    }

    &__arrow {
      display: none;
      width: 1rem;
      height: 1rem;
      position: relative;
      margin: 0 0 0 7px;
      top: 2px;
      @include respond-to(sm) {
        display: inline-block;
      }
      span {
        top: 0.5rem;
        position: absolute;
        width: 0.63rem;
        height: 0.1rem;
        display: inline-block;
        transition: all 0.2s ease;
        &:first-of-type {
          left: 0;
          transform: rotate(45deg);
        }
        &:last-of-type {
          right: 0;
          transform: rotate(-45deg);
        }
      }
    }
  }

  .Row__active {
    .Row__arrow {
      span {
        &:first-of-type {
          transform: rotate(-45deg);
        }
        &:last-of-type {
          transform: rotate(45deg);
        }
      }
    }
  }

  .Row__itemsCenter {
    margin-bottom: 15px;
    align-items: center;
  }
  .Row__withMargin {
    margin-bottom: 15px;
  }
  .Row__withSmallMargin {
    margin-bottom: 5px;
  }
`;

export default staticStyles;
