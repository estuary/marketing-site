export const globalMaxWidth = `
  max-width: calc(1280px + 2 * min(10vw,160px));
  
  margin-left: auto;
  margin-right: auto;

  padding-left: calc(min(10vw,160px));
  padding-right: calc(min(10vw,160px));

  @media (max-width: 425px) {
      padding-left: calc(min(10vw,20px));
      padding-right: calc(min(10vw,20px));
  }
`

export const sectionTopBottomPadding = `
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 425px) {
      padding-top: 40px;
      padding-bottom: 40px;
  }
`

/* TODO: Transfer the global styles from style.less to this styled-components file */
