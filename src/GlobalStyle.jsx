/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { CLASS_UTILITY } from './shared/utils/css';

const GlobalStyle = props => {
  return (
    <Global
      {...props}
      styles={css`
        ${emotionNormalize}
        ${CLASS_UTILITY}
        :root {
          --primary-color: #27ae60;
          --mix-primary-color: #3db670;
          --font: 'Roboto', 'HelveticaNeue', 'Helvetica Neue', sans-serif;
          --subtitle: #9fa2aa;
          --white-color: #fff;
          --black-color: #000;
          --secondary-color: #4b9bff;
          --yellow-color: #ffd76e;
          --warning-color: #ff5f5f;
        }
        html {
          font-family: sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        body {
          margin: 0;
          font-family: var(--font);
        }
        .t-25px-34px {
          font: normal normal 25px/34px var(--font);
        }
        .t-400-25px-34px {
          font: normal 400 25px/34px var(--font);
        }
        .t-400-18px-22px {
          font: normal 400 18px/22px var(--font);
        }
        .t-500-12px-20px {
          font: normal 500 12px/20px var(--font);
        }
        .t-500-18px-20px {
          font: normal 500 18px/20px var(--font);
        }
        .t-600-36px-43px {
          font: normal 600 36px/43px var(--font);
        }
        .t-400-36px-43px {
          font: normal 600 36px/43px var(--font);
        }
        .t-500-20px-20px {
          font: normal 500 20px/20px var(--font);
        }
        .t-600-20px-24px {
          font: normal 600 20px/24px var(--font);
        }
        .t-600-18px-24px {
          font: normal 600 18px/24px var(--font);
        }
        .t-700-18px-22px {
          font: normal 700 18px/22px var(--font);
        }
        .c-darkgrayishblue {
          color: var(--subtitle);
        }
        .c-black {
          color: var(--black-color);
        }
        .c-secondary-blue {
          color: var(--secondary-color);
        }
        .c-primary {
          color: var(--primary-color);
        }
        .c-yellow {
          color: var(--yellow-color);
        }
        .c-warning {
          color: var(--warning-color);
        }
        .card-wrapper {
          width: 306px;
          height: 134px;
          border-radius: 6px;
          margin: 0 30px 25px 0;
        }
        .border-bt {
          border-bottom: 3px solid black;
          width: 126px;
        }
        .t-600-28px-38px {
          font: normal 600 28px/38px var(--font);
        }
        .mt-75 {
          margin-top: 75%;
        }
        .c-content {
          margin: 30px;
          background-color: var(--white-color);
        }
        // Override antd
        .ant-input {
          border-radius: 4px;
        }
        .ant-pro-sider {
          && {
            background-color: var(--primary-color);
            border: 1px solid #454b60;
          }
        }
        .ant-pro-sider .ant-menu {
          padding-top: 96px;
        }
        .ant-pro-menu-item {
          font-weight: 700;
          font-size: 14px;
          line-height: 22px;
        }
        .ant-menu-dark.ant-menu-inline .ant-menu-item {
          height: 56px;
          display: flex;
          padding-top: 10px;
        }
        .ant-menu-item-selected {
          background-color: var(--mix-primary-color) !important;
          border-left: 3px solid white !important;
        }
        .ant-form-inline .ant-form-item {
          margin-bottom: 15px;
        }
        .ant-table-thead th.ant-table-column-has-sorters {
          text-align: center;
        }
        .ant-table-thead
          > tr
          > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
          height: 0;
        }
        .ant-table {
          overflow-x: auto;
        }
        .ant-input-affix-wrapper {
          margin-bottom: 10px;
        }
      `}
    />
  );
};

export default GlobalStyle;
