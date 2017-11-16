import PropTypes from 'prop-types';
import React from 'react';

export default class StringControl extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return <input type="text" id={this.props.forID} value={this.props.value || ''} onChange={this.handleChange} />;
  }
}

StringControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
};