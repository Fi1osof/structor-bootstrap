/**
*
* Button
*
*/

import React, { Component } from "react";

import PropTypes from "prop-types";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleValue: ""
    };
  }

  render() {
    const { exampleValue } = this.state; // eslint-disable-line
    const { 
      exampleProp, 
      label,
      type,
      className,
      primary,
      success,
      info,
      warning,
      danger,
      navbar,
      link,
      ...other
    } = this.props; // eslint-disable-line

    var classNames = ["btn"];

    if(className){
      classNames.push(className);
    }

    classNames.push("default");

    // default && classNames.push("default");
    primary && classNames.push("btn-primary");
    success && classNames.push("btn-success");
    info && classNames.push("btn-info");
    warning && classNames.push("btn-warning");
    danger && classNames.push("btn-danger");
    link && classNames.push("btn-link");
    // navbar && classNames.push("btn-navbar");
 

    return <button 
      className={classNames.join(" ")}
      type={type}
    >
      {label}
    </button>;
  }
}

Button.propTypes = {
  exampleProp: PropTypes.string
};
Button.defaultProps = {
  exampleProp: ""
};

export default Button;
