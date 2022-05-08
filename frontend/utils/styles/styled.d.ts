mport 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    fontColor: string;
    dividerColor: string;
    /* Footer */
    bgFooter: string;
    footerLinkColor: string;
    footerLinkHover: string;

    /* Contact Form */
    contactBgColor: string;
    inputBorderColorHover: string;
    inputBorderColorFocus: string;
    inputSubmitBg: string;
    labelColor: string;
    inputFontColor: string;
    inputBorder: string;
    dropdownLabel: string;
    bgSearchInputWrapper: string;
    colorSearchInputWrapper: string;
    borderSearchInputWrapper: string;

    /* CARD */
    cardShadow: string;
    gridItemCardBg: string;
    cardTitleColor: string;
    cardContentColor: string;

    /* Pane */
    tabActiveColor: string;

    /* Heading */
    headingColor: string;
    paragraph: string;

    /* Header */
    boxHeaderHeadline: string;
    boxHeaderSubline: string;

    /* Loader */
    loaderAnimationColor: string;
  }
}
