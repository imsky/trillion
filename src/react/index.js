import React from 'react';

import template from './template.jsx';

export default React.createClass({
  'render': template,
  'getInitialState': function () {
    return {
      'indices': [],
      'rows': []
    };
  },

  'getDefaultProps': function () {
    return {
      'pagination': true,
      'search': true,
      'filters': true
    };
  },

  'prevPage': function () {
    const Trillion = this.props.Trillion;
    Trillion.getPreviousPage();
  },

  'nextPage': function () {
    const Trillion = this.props.Trillion;
    Trillion.getNextPage();
  },

  //todo: this should be communicating header name, not field
  'sortByHeader': function (headerIndex) {
    const Trillion = this.props.Trillion;
    Trillion.sortByHeader(headerIndex);
  },

  'updateFromTrillion': function (rows, indices) {
    this.setState({
      'rows': rows,
      'indices': indices
    });
  },

  'componentWillMount': function () {
    const Trillion = this.props.Trillion;
    Trillion.registerListener(this.updateFromTrillion);
  },

  'componentWillUnmount': function () {
    const Trillion = this.props.Trillion;
    Trillion.unregisterListener(this.updateFromTrillion);
  }
});

module.exports = exports.default;