import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

// debugger
// console.log("Hi")

ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
