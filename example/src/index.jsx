/**
 * Created by yan on 16-1-20.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Button from '../../lib/Button/index';
import Tag from '../../lib/Tag/index';
import 'style-loader!css-loader!./style.css';

const Root = props => {
  return (
    <ul>
      <li><Button/></li>
      <li><Tag/></li>
    </ul>
  )
}

ReactDom.render(<Root/>, document.getElementById('root'));