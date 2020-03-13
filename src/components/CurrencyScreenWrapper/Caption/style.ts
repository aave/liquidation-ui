import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .Caption {
    max-width: 500px;
    text-align: center;
    margin: 0 auto 30px;
    @include respond-to(sm) {
      margin: 0 auto 25px;
    }

    &__title {
      margin-bottom: 7px;
      font-size: $large;
      font-weight: 600;
    }
  }

  .CaptionGray {
    margin-bottom: 20px;
  }
`;

export default staticStyles;
