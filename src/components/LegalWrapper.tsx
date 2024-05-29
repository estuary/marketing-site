import styled from 'styled-components';

const LegalWrapper = styled.div`
  padding-left: calc(min(9%, 146px));
  padding-right: calc(min(9%, 146px));

  .legal-underline {
    text-decoration: underline;
  }

  .legal-bold {
    font-weight: bold;
  }

  &.privacy-root {
    .last-updated {
      font-style: italic;
    }
  }

  &.terms-root {
    display: flex;
    flex-direction: column;

    h4,
    h6 {
      text-align: center;
    }

    .last-updated {
      font-weight: bold;
      color: #6377ee;
      margin-top: 0;
      text-align: center;
    }
  }
`;

export default LegalWrapper;
