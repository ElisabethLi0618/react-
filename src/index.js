import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = <h1>Hello jsx <span>这是一个小盒子</span></h1>

// 渲染react元素
ReactDOM.render(title, document.getElementById('root'))