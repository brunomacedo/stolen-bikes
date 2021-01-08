import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    background: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
  }
  input {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  blockquote, q {
    quotes: none;
  }
  ol, ul {
    list-style: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  img {
    max-width: 100%;
  }
  strong {
    font-weight: 500;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .react-datepicker__triangle {
    border-bottom-color: white !important;
  }
  .react-datepicker__navigation--next,
  .react-datepicker__navigation--previous {
    top: 12px;
    outline: none;
  }
  .react-datepicker__navigation--next {
    border-left-color: black;
  }
  .react-datepicker__navigation--previous {
    border-right-color: black;
  }
  .react-datepicker__day {
    width: 2rem;
    line-height: 1.5rem;
  }
  .react-datepicker__day-name {
    width: 2rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: ${colors.darkBiege};
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header,
  .react-datepicker__day {
    font-size: 0.8rem;
  }
  .react-datepicker__current-month {
    padding: 3px 0 10px;
    border-bottom: 1px solid ${colors.grey};
  }
  .react-datepicker__header {
    background-color: white;
    border: none;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    color: white !important;
    background-color: ${colors.darkBiege} !important;
    font-weight: 300;
  }
  .react-datepicker__day-names {
    font-size: 0.8rem;
    margin-top: 2px;
    font-weight: 400;
  }
  .react-datepicker__week .react-datepicker__day {
    &:hover {
      background-color: ${colors.darkBiege};
      color: white;
    }
    &.react-datepicker__day--today {
      color: black;
    }
    &.react-datepicker__day--disabled {
      color: ${colors.grey};
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyles;
