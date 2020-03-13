import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/screen-size';

  .Preloader {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    text-align: center;
    padding: 10px;
    @include respond-to(sm) {
      min-height: 450px;
    }

    &__text {
      margin-bottom: 20px;
      h4 {
        font-weight: 600;
        margin-bottom: 5px;
      }
    }

    &__dots {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__dot {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: 5px;
    }
  }
`;

export default staticStyles;
