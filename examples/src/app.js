import React from 'react';
import ReactDOM from 'react-dom';
import {Header,Block} from '../../src/index.js';// eslint-disable-line
import '../../style/header.less';// eslint-disable-line
ReactDOM.render(
  <div className="component-template">
    <Header />
    <Block />
  </div>,
  document.getElementById('header-wrap'),
);
