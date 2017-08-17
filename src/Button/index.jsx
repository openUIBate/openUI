/*
 * Created by wcl on 17-8-16.
 */
import React from 'react';
import 'style-loader!css-loader?modules!less-loader!autoprefixer-loader?{browsers:["last 2 version","Firefox 15"]}!./index.less';

// const Button = props => {
//   const _props = props;
//   return (
//     <div className="button">
//       <span>{_props.text || 'Button'}</span>
//     </div>
//   )
// };

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="button">
        <span>{this.props.text || 'Button'}</span>
      </div>
    )
  }
};