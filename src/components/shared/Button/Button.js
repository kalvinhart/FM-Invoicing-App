import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./Button.styles";

const Button = ({ type, children, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary", "danger"]),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
