import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .NoBrowserWallet__wrapper {
    max-width: 680px;
    margin: 0 auto;
    @include respond-to(sm) {
      max-width: 320px;
      text-align: left;
      margin: 20px 0 0 0 !important;
    }
  }

  .NoBrowserWallet__link {
    font-weight: 600;
    &:hover {
      opacity: 1;
    }
  }

  @media (max-height: 500px) and (max-width: 1000px) {
    .NoBrowserWallet__wrapper {
      margin: 20px auto 0 !important;
    }
  }
`;

export default staticStyles;
