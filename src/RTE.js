/**
 * src: https://www.npmjs.com/package/react-rte
 */

import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import './RTE.css';
 
class RTE extends Component {
    constructor(props) {
        super(props)
        this.state = {
          value: RichTextEditor.createValueFromString(props.value, 'html')
        };
    }
 
  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      const html = value.toString('markdown');
      this.props.onChange(html);
    }
  };
 
  render () {
    return (
      <RichTextEditor
        className={"editor"}
        id={this.props.id}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

export default RTE;