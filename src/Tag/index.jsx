/*
 * Created by wcl on 17-8-16.
 */
import React from 'react';
import 'style-loader!css-loader?modules!less-loader!autoprefixer-loader?{browsers:["last 2 version","Firefox 15"]}!./index.less';

// const Tag = props => {
//   const _props = props;
//   return (
//     <div className="tag">
//       <span>{_props.text || 'Tag'}</span>
//     </div>
//   )
// };

export default class Tag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="tag">
        <span>{this.props.text || 'Tag'}</span>
      </div>
    )
  }
};