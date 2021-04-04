import styled from 'styled-components';

export const SQMarkdownWrapper = styled.div`
  pre {
    display: block;
    border-radius: 4px;
    background: #f3f4f4;
    color: #333;
    font-family: Menlo, Monaco, Consolas, monospace;
    line-height: 1.5;
    padding: 10px;
  }

  /*

XCode style (c) Angel Garcia <angelgarcia.mail@gmail.com>

*/

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #fff;
    color: black;
  }

  /* Gray DOCTYPE selectors like WebKit */
  .xml .hljs-meta {
    color: #c0c0c0;
  }

  .hljs-comment,
  .hljs-quote {
    color: #007400;
  }

  .hljs-tag,
  .hljs-attribute,
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-name {
    color: #aa0d91;
  }

  .hljs-variable,
  .hljs-template-variable {
    color: #3f6e74;
  }

  .hljs-code,
  .hljs-string,
  .hljs-meta-string {
    color: #c41a16;
  }

  .hljs-regexp,
  .hljs-link {
    color: #0e0eff;
  }

  .hljs-title,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-number {
    color: #1c00cf;
  }

  .hljs-section,
  .hljs-meta {
    color: #643820;
  }

  .hljs-class .hljs-title,
  .hljs-type,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-params {
    color: #5c2699;
  }

  .hljs-attr {
    color: #836c28;
  }

  .hljs-subst {
    color: #000;
  }

  .hljs-formula {
    background-color: #eee;
    font-style: italic;
  }

  .hljs-addition {
    background-color: #baeeba;
  }

  .hljs-deletion {
    background-color: #ffc8bd;
  }

  .hljs-selector-id,
  .hljs-selector-class {
    color: #9b703f;
  }

  .hljs-doctag,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  body {
    color: rgb(51, 51, 51);
    line-height: 1.6;
  }

  a {
    color: #4183c4;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
    line-height: 1.4;
    cursor: text;
    color: #333;
  }
  h1:hover a.anchor,
  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    text-decoration: none;
  }
  h1 tt,
  h1 code {
    font-size: inherit;
  }
  h2 tt,
  h2 code {
    font-size: inherit;
  }
  h3 tt,
  h3 code {
    font-size: inherit;
  }
  h4 tt,
  h4 code {
    font-size: inherit;
  }
  h5 tt,
  h5 code {
    font-size: inherit;
  }
  h6 tt,
  h6 code {
    font-size: inherit;
  }
  h1 {
    font-size: 1.8em;
    line-height: 1.2;
    border-bottom: 1px solid #eee;
  }
  h2 {
    font-size: 1.6em;
    line-height: 1.225;
    border-bottom: 1px solid #eee;
  }

  h3 {
    font-size: 1.5em;
    line-height: 1.43;
  }
  h4 {
    font-size: 1.4em;
  }
  h5 {
    font-size: 1.3em;
  }
  h6 {
    font-size: 1.2em;
    color: #777;
  }
  p,
  blockquote,
  ul,
  ol,
  dl,
  table {
    font-size: 1.05em;
    margin: 0.8em 0;
  }

  ul,
  ol,
  li {
  }

  li > ol,
  li > ul {
    margin: 0 0;
  }
  hr {
    height: 2px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
    overflow: hidden;
    box-sizing: content-box;
  }

  li p.first {
    display: inline-block;
  }
  ul,
  ol {
    padding-left: 30px;
  }
  ul:first-child,
  ol:first-child {
    margin-top: 0;
  }
  ul:last-child,
  ol:last-child {
    margin-bottom: 0;
  }
  blockquote {
    border-left: 4px solid #dfe2e5;
    padding: 0 15px;
    color: #777777;
  }
  blockquote blockquote {
    padding-right: 0;
  }
  table {
    padding: 0;
    word-break: initial;
    width: 100%;
  }
  table tr {
    border-top: 1px solid #dfe2e5;
    margin: 0;
    padding: 0;
  }
  table tr:nth-child(2n),
  thead {
    background-color: #f8f8f8;
  }
  table th {
    font-weight: bold;
    border: 1px solid #dfe2e5;
    border-bottom: 0;
    margin: 0;
    padding: 6px 13px;
    text-align: center;
  }
  table td {
    border: 1px solid #dfe2e5;
    margin: 0;
    padding: 6px 13px;
  }
  table th:first-child,
  table td:first-child {
    margin-top: 0;
  }
  table th:last-child,
  table td:last-child {
    margin-bottom: 0;
  }

  code,
  tt {
    border-radius: 3px;
    padding: 0;
    padding: 2px 4px 0px 4px;
    font-size: 1em;
  }

  code {
    background-color: #f3f4f4;
    padding: 0 2px 0 2px;
  }

  .md-mathjax-midline {
    background: #fafafa;
  }

  /** focus mode */
  .on-focus-mode blockquote {
    border-left-color: rgba(85, 85, 85, 0.12);
  }

  header,
  footer {
    font-family: 'Segoe UI', 'Arial', sans-serif;
  }
`;
