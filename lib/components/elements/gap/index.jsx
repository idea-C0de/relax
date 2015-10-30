import React from 'react';

import propsSchema from './props-schema';
import settings from './settings';
import Component from '../../component';
import Element from '../../element';

export default class Gap extends Component {
  static propTypes = {
    amount: React.PropTypes.number.isRequired,
    element: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    amount: 30
  }

  static propsSchema = propsSchema
  static settings = settings

  render () {
    const style = {
      height: this.props.amount
    };

    return (
      <Element {...this.props} htmlTag='div' style={style} settings={this.constructor.settings} element={this.props.element} />
    );
  }
}
